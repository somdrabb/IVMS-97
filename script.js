
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCAb9aGAXx0vjZ_GGG7-_9-6i7H21vO440",
  authDomain: "ivms-97.firebaseapp.com",
  databaseURL: "https://ivms-97-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ivms-97",
  storageBucket: "ivms-97.firebasestorage.app",
  messagingSenderId: "252389246954",
  appId: "1:252389246954:web:39fc3645602cc711929493",
  measurementId: "G-H19DL7TVMD"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

function migrateLocalToFirebase() {
  const localData = JSON.parse(localStorage.getItem("inventory")) || [];
  if (localData.length === 0) {
    alert("No local inventory found to migrate.");
    return;
  }

  let uploaded = 0;
  localData.forEach((product) => {
    db.ref("inventory").push(product)
      .then(() => {
        uploaded++;
        if (uploaded === localData.length) {
          alert("✅ Migration complete! Local data is now in Firebase.");
        }
      })
      .catch((err) => {
        console.error("❌ Upload failed:", err);
        alert("❌ Failed to migrate to Firebase.");
      });
  });
}


// Predefined inventory products
let products = JSON.parse(localStorage.getItem('inventory')) || [];
let editIndex = -1;
// ========================== CHANGE AMOUNT ==========================
function changeAmount(index, change) {
  const input = document.getElementById(`amount-${index}`);
  let current = parseInt(input.value) || 0;
  const newVal = Math.max(0, current + change);
  input.value = newVal;

  const timestampDiv = document.getElementById(`timestamp-${index}`);
  const now = new Date().toLocaleString();
  timestampDiv.innerText = now;
  timestampDiv.style.color = change > 0 ? 'green' : 'red';

  const doneBtn = document.getElementById(`done-${index}`);
  doneBtn.style.display = 'block';
  doneBtn.classList.add('water-btn');
  doneBtn.onclick = () => saveStock(index, change);
}

function saveStock(index, change = 0) {
  const input = document.getElementById(`amount-${index}`);
  const oldAmount = products[index].amount;
  const newAmount = parseInt(input.value || '0');
  products[index].amount = newAmount;

  const now = new Date();
  const timestamp = now.toLocaleString();
  products[index].timestamp = timestamp;

  let changeType = '';
  if (newAmount > oldAmount) {
    changeType = 'increase';
  } else if (newAmount < oldAmount) {
    changeType = 'decrease';
  }
  products[index].changeType = changeType;

  localStorage.setItem('inventory', JSON.stringify(products));

  const notificationLog = JSON.parse(localStorage.getItem('stockNotifications')) || [];
  const difference = newAmount - oldAmount;
  const action = difference > 0 ? `added ${difference}` : difference < 0 ? `removed ${Math.abs(difference)}` : null;

  if (action && difference !== 0) {
    notificationLog.push({
      product: products[index].name,
      ean: products[index].ean,
      oldAmount,
      newAmount,
      action,
      time: timestamp,
      changedBy: 'Admin'
    });
    localStorage.setItem('stockNotifications', JSON.stringify(notificationLog));
  }

  renderInventory();
}

function toggleNotifications(index) {
  const container = document.getElementById(`notification-list-container-${index}`);
  const logs = JSON.parse(localStorage.getItem('stockNotifications')) || [];

  if (container.style.display === 'none' || container.style.display === '') {
    const product = products[index];
    const productLogs = logs.filter(log => log.ean === product.ean);

    const logHTML = productLogs.length
      ? productLogs.reverse().map(log => `
        <div class="notification-item">
          <strong>${log.product}</strong> (EAN: ${log.ean})<br>
          ${log.action} products<br>
          <small>${log.time}</small> – <em>${log.changedBy || 'Admin'}</em>
        </div>
      `).join('')
      : '<div style="padding:10px;">No notifications found.</div>';

    container.innerHTML = `
      <h4>📦 Stock Change History</h4>
      ${logHTML}
    `;
    container.style.display = 'block';
  } else {
    container.style.display = 'none';
  }
}

// ========================== DELETE PRODUCT ==========================
function deleteProduct(index) {
  products.splice(index, 1);
  localStorage.setItem('inventory', JSON.stringify(products));
  renderInventory();
}

// ========================== EDIT PRODUCT ==========================
function editDetails(index) {
  const product = products[index];
  editIndex = index;
  document.getElementById('ean-input').value = product.ean;
  document.getElementById('name-input').value = product.name;
  document.getElementById('specs-input').value = product.specs;
  document.getElementById('weight-input').value = product.weight;
  document.getElementById('amount-input').value = product.amount;
  document.getElementById('category-input').value = product.category;
}

// ========================== LIVE SUGGESTIONS ==========================
const searchInput = document.getElementById('search-input');
const suggestionBox = document.createElement('div');
suggestionBox.id = 'suggestion-box';
suggestionBox.style.border = '1px solid #ccc';
suggestionBox.style.padding = '10px';
suggestionBox.style.maxHeight = '200px';
suggestionBox.style.overflowY = 'auto';
suggestionBox.style.position = 'absolute';
suggestionBox.style.background = '#fff';
suggestionBox.style.display = 'none';
document.getElementById('search-button').insertAdjacentElement('afterend', suggestionBox);

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  suggestionBox.innerHTML = '';
  if (!query) {
    renderInventory(products);
    suggestionBox.style.display = 'none';
    return;
  }
  // Check for exact match and auto-render
const exactMatch = products.find(p =>
  p.ean.toLowerCase() === query ||
  p.name.toLowerCase() === query
);
if (exactMatch) {
  renderInventory([exactMatch]);
  suggestionBox.style.display = 'none'; // 🔥 Hide suggestions
  return; // ❌ Skip showing suggestions
}


  const matches = products.filter(p =>
    p.ean.includes(query) ||
    p.name.toLowerCase().includes(query) ||
    p.specs.toLowerCase().includes(query)
  );
  matches.forEach((product, index) => {
    const item = document.createElement('div');
    item.style.cursor = 'pointer';
    item.style.marginBottom = '5px';
    item.textContent = `${product.name} (${product.ean})`;
    item.onclick = () => {
      searchInput.value = product.ean;
      suggestionBox.style.display = 'none';
      renderInventory([product]);
    };
    suggestionBox.appendChild(item);
  });
  suggestionBox.style.display = matches.length ? 'block' : 'none';
});

// ========================== SEARCH FUNCTION ==========================
document.getElementById('search-button').onclick = () => {
  const query = document.getElementById('search-input').value.toLowerCase();
  const results = products.filter(p =>
    p.ean.toLowerCase() === query ||
    p.name.toLowerCase() === query
  );
  renderInventory(results);
  suggestionBox.style.zIndex = '9999'; // <- add this
};

document.getElementById('add-button').onclick = () => {
  const ean = document.getElementById('ean-input').value.trim();
  const name = document.getElementById('name-input').value.trim();
  const specs = document.getElementById('specs-input').value.trim();
  const weight = document.getElementById('weight-input').value.trim();
  const amount = parseInt(document.getElementById('amount-input').value) || 0;
  const category = document.getElementById('category-input').value.trim();

  if (!ean || !name) return alert("EAN and Name are required");

  const newProduct = { ean, name, specs, weight, amount, category, date: '', reason: '' };

  if (editIndex > -1) {
    products[editIndex] = newProduct;
    editIndex = -1;
  } else {
    products.push(newProduct);
  }

  localStorage.setItem('inventory', JSON.stringify(products));
  renderInventory();

  // Clear form
  document.getElementById('ean-input').value = '';
  document.getElementById('name-input').value = '';
  document.getElementById('specs-input').value = '';
  document.getElementById('weight-input').value = '';
  document.getElementById('amount-input').value = '';
  document.getElementById('category-input').value = '';
};


// ========================== SCAN & AUTO FOCUS BY EAN ==========================
document.getElementById('search-input').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const value = e.target.value.trim();
    const match = products.find(p => p.ean === value);
    if (match) {
      renderInventory([match]);
      setTimeout(() => {
        const index = products.findIndex(p => p.ean === value);
        const input = document.getElementById(`amount-${index}`);
        if (input) input.focus();
      }, 50);
    }
  }
});
renderInventory();

// ========================== RENDER INVENTORY ==========================
function renderInventory(filtered = products) {
  const tbody = document.getElementById('inventory-body');
  tbody.innerHTML = '';

  filtered.forEach((product) => {
    const index = products.findIndex(p => p.ean === product.ean);
    const row = document.createElement('tr');
    row.style.marginBottom = '4px';
    row.style.lineHeight = '1.1';
    row.style.borderBottom = '1px solid #eee';

    const isGreen = product.changeType === 'increase';
    const isRed = product.changeType === 'decrease';
    const timestampColor = isGreen ? '#4CAF50' : isRed ? '#FF4C4C' : '#333';

    const minusBtn = `<button class="stock-btn minus-btn" onclick="changeAmount(${index}, -1)">
      <img src="https://img.icons8.com/?size=50&id=1504&format=png" alt="Minus" style="width:40px; height:40px; border-radius: 60%; background-white:white; padding: 2px;" />
    </button>`;

    const notificationBtn = `
      <button class="notification-btn" onclick="toggleNotifications(${index})" title="Stock Log">
        <img src="https://img.icons8.com/?size=80&id=UnXTYWIXmnLG&format=png" alt="Notify" 
             style="width: 25px; height: 25px; border-radius: 25%; background-color: white; padding: 3px;" />
      </button>
    `;

    const notificationPopup = `
      <div id="notification-list-container-${index}" class="notification-inline" style="display: none;"></div>
    `;

    const amountBox = `<input class="amount-input" type="number" id="amount-${index}" value="${product.amount}" style="width:60px; margin: 0 5px;" />`;

    const plusBtn = `<button class="stock-btn plus-btn" onclick="changeAmount(${index}, 1)">
      <img src="https://img.icons8.com/?size=50&id=1501&format=png" alt="Plus" style="width:40px; height:40px; border-radius: 50%; background-color: white; padding: 2px;" />
    </button>`;

    const controlHTML = `
    <div class="stock-control-wrapper">
    ${notificationBtn}
    <div class="stock-controls">
      <div style="display: flex; flex-direction: column; align-items: center;">
        <div style="display: flex; align-items: center; gap: 10px;">
          ${minusBtn}
          
          ${amountBox}
          ${plusBtn}
        </div>
        ${notificationPopup}
        <div id="timestamp-${index}" class="timestamp" style="color:${timestampColor}">${product.timestamp || ''}</div>
        <button class="action-btn save-btn" id="done-${index}" style="display:none;color:Red; margin-top: 5px;" onclick="saveStock(${index})">Done</button>
      </div>
    `;
    row.innerHTML = `
      <td>${product.ean}</td>
      <td>${product.name}</td>
      <td>${product.specs}</td>
      <td>${product.weight}</td>
      <td>${controlHTML}</td>
      <td>${product.category}</td>
      <td style="display: flex; gap: 10px; align-items: center;">
        <button class="icon-btn delete-btn" onclick="deleteProduct(${index})" title="Delete">
          <img src="https://img.icons8.com/?size=64&id=iMs6ukNZl9UI&format=png" alt="Delete" class="icon-image" style="width:40px; height:40px; border-radius: 50%; background-color: white; padding: 2px;" />
        </button>
        <button class="icon-btn edit-btn" onclick="editDetails(${index})" title="Edit">
          <img src="https://img.icons8.com/?size=50&id=dVvI2OwTvu89&format=png" alt="Edit" class="icon-image" style="width:40px; height:40px; border-radius: 50%; background-color: white; padding: 2px;" />
        </button>
      </td>
    `;

    tbody.appendChild(row);
  });
}

// ========================== UNIVERSAL BARCODE SCANNER HANDLER ==========================
let scanBuffer = '';
let scanTimeout = null;

document.addEventListener('keydown', (e) => {
  // Build up scanBuffer only from printable characters
  if (e.key.length === 1 && !e.ctrlKey && !e.altKey && !e.metaKey) {
    scanBuffer += e.key;
  }

  // Clear and process after a delay (scanner finishes input)
  if (scanTimeout) clearTimeout(scanTimeout);
  scanTimeout = setTimeout(() => {
    const scannedEAN = scanBuffer.trim();
    scanBuffer = '';

    if (scannedEAN.length < 6) return; // Ignore junk or incomplete scan

    const matchIndex = products.findIndex(p => p.ean === scannedEAN);

    if (matchIndex > -1) {
      // ✅ Product found — increase amount by 1
      const product = products[matchIndex];
      product.amount += 1;
      product.timestamp = new Date().toLocaleString();
      product.changeType = 'increase';

      localStorage.setItem('inventory', JSON.stringify(products));
      renderInventory([product]);

      // Focus and show done button
      setTimeout(() => {
        const amountInput = document.getElementById(`amount-${matchIndex}`);
        if (amountInput) {
          amountInput.focus();
          const doneBtn = document.getElementById(`done-${matchIndex}`);
          if (doneBtn) doneBtn.style.display = 'inline-block';
        }
      }, 100);
    } else {
      // ❌ Not found → Fill ONLY the EAN field in Add Product form
      document.getElementById('ean-input').value = scannedEAN;

      const amountInput = document.getElementById('amount-input');
      const currentAmount = parseInt(amountInput.value || '0');
      amountInput.value = (currentAmount + 1).toString(); // default +1

      // Optionally focus on name input
      document.getElementById('name-input').focus();
    }

    // Always refocus the search field so scanner starts clean
    const searchInput = document.getElementById('search-input');
    searchInput.value = '';
    searchInput.focus();
  }, 200); // adjust if your scanner is slower/faster
});


// ========================== HANDLE STOCK CHANGES ==========================
function changeAmount(index, delta) {
  const input = document.getElementById(`amount-${index}`);
  let newAmount = parseInt(input.value || '0') + delta;
  if (newAmount < 0) newAmount = 0;
  input.value = newAmount;
  document.getElementById(`done-${index}`).style.display = 'inline-block';
}
function saveStock(index) {
  const input = document.getElementById(`amount-${index}`);
  const oldAmount = products[index].amount;
  const newAmount = parseInt(input.value || '0');
  products[index].amount = newAmount;
  const now = new Date();
  const timestamp = now.toLocaleString();
  products[index].timestamp = timestamp;
  if (newAmount > oldAmount) {
    products[index].changeType = 'increase';
  } else if (newAmount < oldAmount) {
    products[index].changeType = 'decrease';
  } else {
    products[index].changeType ='';
  }
  localStorage.setItem('inventory', JSON.stringify(products));
  renderInventory();
}
// ========================== DEFAULT CATEGORIES ==========================

document.getElementById('add-button').onclick = () => {
  const ean = document.getElementById('ean-input').value.trim();
  const name = document.getElementById('name-input').value.trim();
  const specs = document.getElementById('price-input').value.trim(); // 'specs' = price
  const weight = document.getElementById('weight-input').value.trim();
  const amount = parseInt(document.getElementById('amount-input').value) || 0;
  const category = document.getElementById('category-input').value.trim();

  if (!ean || !name) {
    alert("EAN and Name are required");
    return;
  }

  const newProduct = {
    ean,
    name,
    specs,
    weight,
    amount,
    category,
    date: '',
    reason: ''
  };

  if (typeof editIndex !== 'undefined' && editIndex > -1) {
    products[editIndex] = newProduct;
    editIndex = -1;
  } else {
    products.push(newProduct);
  }

  localStorage.setItem('inventory', JSON.stringify(products));
  renderInventory();

  // Clear form fields
  document.getElementById('ean-input').value = '';
  document.getElementById('name-input').value = '';
  document.getElementById('price-input').value = '';
  document.getElementById('weight-input').value = '';
  document.getElementById('amount-input').value = '';
  document.getElementById('category-input').value = '';
};

// ========================== AUTO REFRESH (Smooth) ==========================
setInterval(() => {
  const isEditing = document.activeElement.tagName === 'INPUT' && document.activeElement !== searchInput;
  const isSearching = searchInput.value.trim() !== "";

  // Only refresh if not editing or searching
  if (!isEditing && !isSearching) {
    const updatedProducts = JSON.parse(localStorage.getItem('inventory')) || [];
    if (JSON.stringify(products) !== JSON.stringify(updatedProducts)) {
      products = updatedProducts;
      renderInventory();
    }
  }
}, 10000);





