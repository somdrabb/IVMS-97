// Predefined inventory products
let products = JSON.parse(localStorage.getItem('inventory')) || [
  { ean: "8941114003858", name: "Banoful Lacha Semai 350G", specs: "", weight: "350g", amount: 0, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941154030357", name: "Bombay Sweets Lacha Semai", specs: "", weight: "", amount: 0, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941114003919", name: "Bonoful Lascha Shemai 200g", specs: "", weight: "", amount: 0, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941114003940", name: "Banoful Vermichilli 180Gm", specs: "", weight: "", amount:0, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941114003858", name: "Banoful Lacha Semai 350G", specs: "", weight: "", amount: 0, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941154030357", name: "Bombay Sweets Lacha Semai", specs: "", weight: "", amount: 0, category: "Lebensmittel", date: "", reason: "" },

  { ean: "8941114003919", name: "Bonoful Lascha Shemai 200g", specs: "", weight: "", amount: 0, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941114003940", name: "Banoful Vermichilli 180Gm", specs: "", weight: "", amount: 0, category: "Lebensmittel", date: "", reason: "" },
  { ean: "617285466034", name: "Fresh Food Bay Leaf 50Gm", specs: "", weight: "", amount: 0, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8001022417301", name: "Fresh Food Bay Leaf 100Gm", specs: "", weight: "", amount: 0, category: "Lebensmittel", date: "", reason: "" },
  { ean: "617285467826", name: "Fresh Food Chikpeas 500Gm", specs: "", weight: "", amount: 0, category: "Lebensmittel", date: "", reason: "" },
  { ean: "617285465068", name: "Fresh Puffed Rice White/Red", specs: "", weight: "", amount: 0, category: "Lebensmittel", date: "", reason: "" },
  { ean: "617285468991", name: "Fresh Food Dry Prawn 200Gm", specs: "", weight: "", amount: 0, category: "Lebensmittel", date: "", reason: "" },
  { ean: "617285468564", name: "Fresh Food Chilli Flakes200Gm", specs: "", weight: "", amount: 0, category: "Lebensmittel", date: "", reason: "" },

  { ean: "8941114004831", name: "Kishwan Isabgol 100G", specs: "", weight: "", amount: 0, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941114004848", name: "Kishwan Basel Seeds 100G", specs: "", weight: "", amount: 0, category: "Lebensmittel", date: "", reason: "" },
  { ean: "617285466027", name: "Fresh Food Whole Chilli 40Gm", specs: "", weight: "", amount: 0, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8001022417302", name: "Fresh Food Whole Chilli 80Gm", specs: "", weight: "", amount: 0, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8169003006227", name: "Aci Isabgol 50G", specs: "", weight: "", amount: 0, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8169003005411", name: "Aci Pure Curry Powder 400Gm", specs: "", weight: "", amount: 0, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941114008525", name: "Bonoful Chilli Poweder 200G", specs: "", weight: "", amount: 0, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941114008631", name: "Bonoful Curry Powder 500G", specs: "", weight: "", amount: 0, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941114008518", name: "Bonoful Chilli Poweder 500G", specs: "", weight: "", amount: 0, category: "Lebensmittel", date: "", reason: "" },

  { ean: "617285467864", name: "Fresh Food Anise Star 50Gm", specs: "", weight: "", amount: 16, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941114008648", name: "Bonoful Curry Powder 200G", specs: "", weight: "", amount: 4, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8139003004134", name: "Aci Pure Coriander Powder 500G", specs: "", weight: "", amount: 5, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8169003008726", name: "Aci Pure White Paper 50G", specs: "", weight: "", amount: 20, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8720608623471", name: "Taza Tea 150G", specs: "", weight: "", amount: 12, category: "Lebensmittel", date: "", reason: "" },
  { ean: "617285468458", name: "Fresh Food Whole Cinnamon 100Gm", specs: "", weight: "", amount: 7, category: "Lebensmittel", date: "", reason: "" },
  { ean: "816903000951", name: "Aci Pure Kheer Mix 150G", specs: "", weight: "", amount: 11, category: "Lebensmittel", date: "", reason: "" },
  { ean: "617285468892", name: "Fresh Food Nutmegs Whole 100G", specs: "", weight: "", amount: 20, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8169003008801", name: "Aci Pure Nutmeg 100G", specs: "", weight: "", amount: 12, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941114002790", name: "Kishwan Biryani Masala 40G", specs: "", weight: "", amount: 11, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941100511374", name: "Radhuni Biriyani Masala 40G", specs: "", weight: "", amount: 36, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941100511398", name: "Radhuni Kachi Biryani Masala 40G", specs: "", weight: "", amount: 11, category: "Lebensmittel", date: "", reason: "" },

  { ean: "8941100511404", name: "Radhuni Tehari Masala 40G", specs: "", weight: "", amount: 18, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941100511428", name: "Radhuni Kala Bhuna 80G", specs: "", weight: "", amount: 7, category: "Lebensmittel", date: "", reason: "" },
  { ean: "816903000227", name: "Aci Pure Meat Curry Masala 100G", specs: "", weight: "", amount: 11, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941100511435", name: "Radhuni Mejbani Masala 68G", specs: "", weight: "", amount: 7, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941114002813", name: "Kishwan Meat Masala 100G", specs: "", weight: "", amount: 13, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941100511282", name: "Radhuni Chicken Masala 100G", specs: "", weight: "", amount: 14, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941100511084", name: "Radhuni Burhani Masala 50G", specs: "", weight: "", amount: 50, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941114002912", name: "Kishwan Special Kheer Mix 150G", specs: "", weight: "", amount: 23, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941114002974", name: "Kishwan Fish Masala 100G", specs: "", weight: "", amount: 14, category: "Lebensmittel", date: "", reason: "" },

  { ean: "8941100511053", name: "Radhuni Chatpati Masala 50G", specs: "", weight: "", amount: 20, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941100510032", name: "Radhuni Turmeric Powder 200G", specs: "", weight: "", amount: 6, category: "Lebensmittel", date: "", reason: "" },
  { ean: "816903000067", name: "Aci Pure Coriander Powder 200G", specs: "", weight: "", amount: 17, category: "Lebensmittel", date: "", reason: "" },
  { ean: "816903000678", name: "Aci Pure Turmaric Powder 500G", specs: "", weight: "", amount: 20, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941193313053", name: "Ispi Instant Powder Drink Orange 500G", specs: "", weight: "", amount: 6, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941193313152", name: "Ispi Instant Powder Drink Mango 500G", specs: "", weight: "", amount: 5, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8169003009228", name: "Aci Pure Murighonto Masala 200G", specs: "", weight: "", amount: 1, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941100511787", name: "Radhuni Khichuri Mix 500Gm", specs: "", weight: "", amount: 20, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941114002585", name: "Kishwan Khichuri Mix 500Gm", specs: "", weight: "", amount: 1, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941114002899", name: "Kishwan Halim Mix 200Gm", specs: "", weight: "", amount: 16, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941100511725", name: "Radhuni Halim Mix 200Gm", specs: "", weight: "", amount: 29, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941100510193", name: "Radhuni Corriender Powder 200G", specs: "", weight: "", amount: 13, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941193313077", name: "Ispi Instant Powder Drink Orange 1500G", specs: "", weight: "", amount: 5, category: "Lebensmittel", date: "", reason: "" },

  { ean: "8941193313084", name: "Ispi Instant Powder Drink Mango 1500G", specs: "", weight: "", amount: 4, category: "Lebensmittel", date: "", reason: "" },
{ ean: "16229004019", name: "Savoy Coconut Cream 400Ml", specs: "", weight: "", amount: 22, category: "Lebensmittel", date: "", reason: "" },
{ ean: "16229005122", name: "Aroy-D Coconut Milk 400Ml", specs: "", weight: "", amount: 22, category: "Lebensmittel", date: "", reason: "" },
{ ean: "84909002341", name: "Cock Brand Red Curry Paste 400Gm", specs: "", weight: "", amount: 22, category: "Lebensmittel", date: "", reason: "" },
{ ean: "84909002631", name: "Cock Brand Green Curry Paste 1Kg", specs: "", weight: "", amount: 12, category: "Lebensmittel", date: "", reason: "" },
{ ean: "84909023049", name: "Süße Chillisauce 800Gm", specs: "", weight: "", amount: 1, category: "Lebensmittel", date: "", reason: "" },
{ ean: "21794209", name: "Salz Stangen 250Gm", specs: "", weight: "", amount: 4, category: "Lebensmittel", date: "", reason: "" },
{ ean: "3223920150328", name: "Zakia Couscous 1Kg", specs: "", weight: "", amount: 6, category: "Lebensmittel", date: "", reason: "" },
{ ean: "3379145024682", name: "Kailo Bowl Noodles Roasted Beef 110Gm", specs: "", weight: "", amount: 8, category: "Lebensmittel", date: "", reason: "" },
{ ean: "3700019510350", name: "Marguerite Attieke 250Gm", specs: "", weight: "", amount: 6, category: "Lebensmittel", date: "", reason: "" },
{ ean: "4003586101082", name: "Funny Frisch Chipsfrisch Chakalka 125Gm", specs: "", weight: "", amount: 7, category: "Lebensmittel", date: "", reason: "" },
{ ean: "4003586102317", name: "Funny Frisch Ofen Chips Smoky Bbq 125Gm", specs: "", weight: "", amount: 9, category: "Lebensmittel", date: "", reason: "" },
{ ean: "4009491022047", name: "Valensina Multivitamin 1L", specs: "", weight: "", amount: 2, category: "Getränke", date: "", reason: "" },
{ ean: "4009491022122", name: "Valensina Pink Grapefruit 1L", specs: "", weight: "", amount: 4, category: "Getränke", date: "", reason: "" },
{ ean: "4014400400007", name: "Toffifee Haselnuss Caramel 125Gm", specs: "", weight: "", amount: 10, category: "Lebensmittel", date: "", reason: "" },
{ ean: "4014400928907", name: "Knoppers X8 200Gm", specs: "", weight: "", amount: 3, category: "Lebensmittel", date: "", reason: "" },
{ ean: "4014400929355", name: "Knoppers Erdnussriegel 5X40G 200Gm", specs: "", weight: "", amount: 2, category: "Lebensmittel", date: "", reason: "" },
{ ean: "4014400929379", name: "Knoppers Kokosriegel 5X40G 200Gm", specs: "", weight: "", amount: 3, category: "Lebensmittel", date: "", reason: "" },
{ ean: "4014400931280", name: "Knoppers Nussriegel 5X40G 200Gm", specs: "", weight: "", amount: 5, category: "Lebensmittel", date: "", reason: "" },
{ ean: "4014400932959", name: "Toffifee White Chocolate 125Gm", specs: "", weight: "", amount: 10, category: "Lebensmittel", date: "", reason: "" },
{ ean: "4061458024815", name: "Bellasan Pflanzenol Raps 1L", specs: "", weight: "", amount: 1, category: "Lebensmittel", date: "", reason: "" },
{ ean: "4061458056533", name: "Farmer Erdnuss Pikant 150Gm", specs: "", weight: "", amount: 5, category: "Lebensmittel", date: "", reason: "" },
{ ean: "4061458056595", name: "Farmer Nuss-Mix Gerostet & Gesalzen 150Gm", specs: "", weight: "", amount: 12, category: "Lebensmittel", date: "", reason: "" },
{ ean: "4061458056618", name: "Farmer Cashewkerne 150Gm", specs: "", weight: "", amount: 2, category: "Lebensmittel", date: "", reason: "" },
{ ean: "4061461765187", name: "Farmer Erdnuss Fajita 150Gm", specs: "", weight: "", amount: 3, category: "Lebensmittel", date: "", reason: "" },
{ ean: "42376101", name: "Saskia Mineralwasser Still 1.5L", specs: "", weight: "", amount: 25, category: "Lebensmittel", date: "", reason: "" },
{ ean: "42376170", name: "Saskia Mineralwasser Classic 500Ml", specs: "", weight: "", amount: 10, category: "Getränke", date: "", reason: "" },
{ ean: "42376200", name: "Saskia Mineralwasser Still 500Ml", specs: "", weight: "", amount: 30, category: "Getränke", date: "", reason: "" },
{ ean: "42391753", name: "Kong Strong 500Ml", specs: "", weight: "", amount: 4, category: "Getränke", date: "", reason: "" },
{ ean: "4255683500606", name: "Homelux Electric Kettle 1.8L", specs: "", weight: "", amount: 2, category: "Lebensmittel", date: "", reason: "" },
{ ean: "4255683500613", name: "Homelux Electric Kettle 1.8L", specs: "", weight: "", amount: 2, category: "Lebensmittel", date: "", reason: "" },


{ ean: "4255683500620", name: "Homelux Electric Kettle 1.8L", specs: "", weight: "", amount: 2, category: "Lebensmittel", date: "", reason: "" },
{ ean: "4255683500637", name: "Homelux Electric Kettle 1.8L", specs: "", weight: "", amount: 2, category: "Lebensmittel", date: "", reason: "" },
{ ean: "4260480190387", name: "Anam Red Split Lentils 1Kg", specs: "", weight: "", amount: 4, category: "Lebensmittel", date: "", reason: "" },
{ ean: "4306188037422", name: "Scenatic Energy Drink Passion Fruit 250Ml", specs: "", weight: "", amount: 8, category: "Getränke", date: "", reason: "" },
{ ean: "4987205905599", name: "Bigen Powder Hair Color 6Gm", specs: "", weight: "", amount: 6, category: "Lebensmittel", date: "", reason: "" },
{ ean: "4987205931307", name: "Bigen Speedy Conditioning Color ", specs: "", weight: "", amount: 3, category: "Lebensmittel", date: "", reason: "" },
{ ean: "4987205933820", name: "Bigen Speedy Men'S Hair Color ", specs: "", weight: "", amount: 1, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5000112602029", name: "Coca Cola  330Ml", specs: "", weight: "", amount: 1, category: "Getränke", date: "", reason: "" },
{ ean: "5000118004131", name: "Pg Tips Loose Tea 250Gm", specs: "", weight: "", amount: 3, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5000382104896", name: "Rubicon Delux 1L", specs: "", weight: "", amount: 4, category: "Getränke", date: "", reason: "" },
{ ean: "5011157030401", name: "Tilda Pure Basmati Rice 5Kg", specs: "", weight: "", amount: 3, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5015821159528", name: "Elephant Atta Medium 10Kg", specs: "", weight: "", amount: 3, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5017689000165", name: "Trs Chana Dal 500 Gr ", specs: "", weight: "", amount: 8, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5017689000202", name: "Trs Moong Daal Clean 500G ", specs: "", weight: "", amount: 7, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5017689000646", name: "Trs Red Split Lentils 500 Gr ", specs: "", weight: "", amount: 7, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5017689001360", name: "Trs Chilli Powder Extra Hot 100Gm", specs: "", weight: "", amount: 20, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5017689001407", name: "Trs Paprika Powder 100G ", specs: "", weight: "", amount: 6, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5017689001674", name: "Trs Jeera Whole 100 Gr ", specs: "", weight: "", amount: 10, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5017689001841", name: "Trs Haldi Powder 400 Gr ", specs: "", weight: "", amount: 5, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5017689001988", name: "Trs Fennel Seeds 100Gm", specs: "", weight: "", amount: 1, category: "Lebensmittel", date: "", reason: "" },

{ ean: "5017689005726", name: "Trs Dhania Powder (Koriander) (Indori) 1Kg", specs: "", weight: "", amount: 2, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5017689006129", name: "Trs Jeera Powder (Cumin) 400G", specs: "", weight: "", amount: 2, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5017689008222", name: "Trs Gram Flour 1 Kg", specs: "", weight: "", amount: 5, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5017689008284", name: "Trs Cardamom Green 50 Gr", specs: "", weight: "", amount: 13, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5017689008352", name: "Trs Gram Flour2 Kg", specs: "", weight: "", amount: 4, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5017689009908", name: "Trs Cloves Whole 50Gr", specs: "", weight: "", amount: 25, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5017689010225", name: "Trs Kalonji (Nigella Seeds) 100G", specs: "", weight: "", amount: 13, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5017689010355", name: "Trs Crushed Chillies (Extra Hot) 100 Gr", specs: "", weight: "", amount: 15, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5017689010706", name: "Trs Ajwain Seeds 100Gm", specs: "", weight: "", amount: 10, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5017689010836", name: "Trs Green Raisins 100Gm", specs: "", weight: "", amount: 11, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5017689012137", name: "Trs Dalchini (Cinnamon Sticks) 50 Gr", specs: "", weight: "", amount: 11, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5017689014223", name: "Trs Coarse Semolina 500Gm", specs: "", weight: "", amount: 12, category: "Lebensmittel", date: "", reason: "" },

{ ean: "5017689014360", name: "Trs Semolina Fine 500Gm", specs: "", weight: "", amount: 10, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5017689014711", name: "Trs White Rice Flour 500G", specs: "", weight: "", amount: 12, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5017689015398", name: "Trs Rice Flour 1.5Kg", specs: "", weight: "", amount: 14, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5017689024079", name: "Trs Tamarind Paste 400Gm", specs: "", weight: "", amount: 13, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5017689027254", name: "Trs Red Peanuts 375Gm", specs: "", weight: "", amount: 7, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5017689034269", name: "Trs Sesame Seeds Hulled 100G", specs: "", weight: "", amount: 18, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5017689040895", name: "Trs Soya Chunks 250G", specs: "", weight: "", amount: 5, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5017689045036", name: "Trs Moong Daal Chilka 500G", specs: "", weight: "", amount: 20, category: "Lebensmittel", date: "", reason: "" },

{ ean: "5017689064662", name: "Trs Toor Dai Plain 500 Gr", specs: "", weight: "", amount: 12, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5017689140229", name: "Trs Bicarbonate Of Soda 100Gm", specs: "", weight: "", amount: 3, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5017689347901", name: "Trs Chillies Crushed (Extra Hot) 250 Gr", specs: "", weight: "", amount: 15, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5017689367183", name: "Trs Poppy Seeds White 100G", specs: "", weight: "", amount: 35, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5017689367206", name: "Trs Tukmaria 100Gm", specs: "", weight: "", amount: 20, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5017689367978", name: "Trs Kala Jeera (Black Cumin) 50 Gr", specs: "", weight: "", amount: 50, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5017689484620", name: "Trs Cinnamon Powder 100 Gr", specs: "", weight: "", amount: 8, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5017689534257", name: "Trs Butter Ghee 500 Gr", specs: "", weight: "", amount: 3, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5017689926892", name: "Trs Chilli Powder (Kashmiri) 100G", specs: "", weight: "", amount: 11, category: "Lebensmittel", date: "", reason: "" },

{ ean: "5020595252832", name: "Scheffler Butane Gas Stück 227Gm", specs: "", weight: "", amount: 34, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5022496003926", name: "Vatica Olive Hair Oil 200Ml", specs: "", weight: "", amount: 6, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5022496019606", name: "Dabur Amla Blackseed Oil 200Ml", specs: "", weight: "", amount: 3, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5028217001165", name: "Laziza Seekh Kebab 100Gm", specs: "", weight: "", amount: 5, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5028217001738", name: "Laziza Shami Kebab 100Gm", specs: "", weight: "", amount: 4, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5028217001769", name: "Laziza Behari Kebab 100Gm", specs: "", weight: "", amount: 6, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5031416011255", name: "Heera Bicarbonate Of Soda 100Gm", specs: "", weight: "", amount: 8, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5031416090830", name: "Heera Whole Yellow Peas 500Gm", specs: "", weight: "", amount: 50, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5053990175949", name: "Pringles Hot Bbq 160Gm", specs: "", weight: "", amount: 24, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5060335635228", name: "Monster Energy 500Ml", specs: "", weight: "", amount: 60, category: "Getränke", date: "", reason: "" },
{ ean: "5060947549555", name: "Monster Energy Zero 500Ml", specs: "", weight: "", amount: 30, category: "Getränke", date: "", reason: "" },
{ ean: "5078643001062", name: "Shezan Mango Drink 1L", specs: "", weight: "", amount: 4, category: "Getränke", date: "", reason: "" },
{ ean: "5283031101952", name: "Lara Sahlap 200Gm", specs: "", weight: "", amount: 6, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5287000098168", name: "Al Yaman Tahini 907Gm", specs: "", weight: "", amount: 6, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5407005820889", name: "Africa Village Pinda Kaas  500Gm", specs: "", weight: "", amount: 2, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5407005822609", name: "Sultan Golden Sella 1121 Basmati Rice 5Kg", specs: "", weight: "", amount: 1, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5407005823231", name: "Desi Moong Daal 500Gm", specs: "", weight: "", amount: 2, category: "Lebensmittel", date: "", reason: "" },
{ ean: "5760466923767", name: "Puck Spread 500Gm", specs: "", weight: "", amount: 3, category: "Lebensmittel", date: "", reason: "" },
{ ean: "6111260550212", name: "Anny Sardines In Oil 125Gm", specs: "", weight: "", amount: 11, category: "Lebensmittel", date: "", reason: "" },
{ ean: "6111260550229", name: "Anny Sardines In Spicy Oil 125Gm", specs: "", weight: "", amount: 31, category: "Lebensmittel", date: "", reason: "" },
{ ean: "617241050154", name: "Kasih Hummus Tahini 510Gm", specs: "", weight: "", amount: 6, category: "Lebensmittel", date: "", reason: "" },
{ ean: "617285465402", name: "Fresh Food Special Dry Cake 300Gm", specs: "", weight: "", amount: 5, category: "Lebensmittel", date: "", reason: "" },
{ ean: "617285467710", name: "Fresh Food Flattened Rice (Red 500Gm", specs: "", weight: "", amount: 17, category: "Lebensmittel", date: "", reason: "" },
{ ean: "617285467857", name: "Fresh Food Tal Misri (Pulm Can 200Gm", specs: "", weight: "", amount: 5, category: "Lebensmittel", date: "", reason: "" },
{ ean: "617285468465", name: "Fresh Food Whole Cardamom 60Gm", specs: "", weight: "", amount: 28, category: "Lebensmittel", date: "", reason: "" },


{ ean: "617285468489", name: "Fresh Food Whole Coriander 70Gm", specs: "", weight: "", amount: 7, category: "Lebensmittel", date: "", reason: "" },
{ ean: "617285468502", name: "Fresh Food Whole Cumin 50Gm", specs: "", weight: "", amount: 21, category: "Lebensmittel", date: "", reason: "" },
{ ean: "617285468601", name: "Fresh Food Chia Seed 100Gm", specs: "", weight: "", amount: 17, category: "Lebensmittel", date: "", reason: "" },
{ ean: "617285468656", name: "Fresh Food Spicy Monekka 300Gm", specs: "", weight: "", amount: 10, category: "Lebensmittel", date: "", reason: "" },
{ ean: "617285468670", name: "Fresh Food Salty Nimki 250Gm", specs: "", weight: "", amount: 15, category: "Lebensmittel", date: "", reason: "" },
{ ean: "617285468762", name: "Fresh Food Whole Panchforon 50Gm", specs: "", weight: "", amount: 12, category: "Lebensmittel", date: "", reason: "" },
{ ean: "617285468779", name: "Fresh Food Whole Mustard Seed 100Gm", specs: "", weight: "", amount: 30, category: "Lebensmittel", date: "", reason: "" },
{ ean: "617285468786", name: "Fresh Food Fennel Seeds 100Gm", specs: "", weight: "", amount: 17, category: "Lebensmittel", date: "", reason: "" },
{ ean: "617285468915", name: "Fresh Food  Tapioca Pearl (Sab 200Gm", specs: "", weight: "", amount: 20, category: "Lebensmittel", date: "", reason: "" },
{ ean: "6181002021232", name: "Maggi Cube Chicken 60X10G 600Gm", specs: "", weight: "", amount: 12, category: "Lebensmittel", date: "", reason: "" },
{ ean: "6210241417190", name: "Durra Dried Apricot Paste 400Gm", specs: "", weight: "", amount: 12, category: "Lebensmittel", date: "", reason: "" },
{ ean: "6251136032159", name: "Durra Special Halawa Pistachios 500Gm", specs: "", weight: "", amount: 4, category: "Lebensmittel", date: "", reason: "" },
{ ean: "6920077418529", name: "Unif Bowl Instant Noodles Spicy Beef 110Gm", specs: "", weight: "", amount: 11, category: "Lebensmittel", date: "", reason: "" },
{ ean: "6921735865365", name: "Bamboo Chopstick Pack ", specs: "", weight: "", amount: 5, category: "Lebensmittel", date: "", reason: "" },
{ ean: "7613287923073", name: "Nestle Nido 975Gm", specs: "", weight: "", amount: 20, category: "Lebensmittel", date: "", reason: "" },
{ ean: "764460628210", name: "Ranga Pori Hena (Mehndi) 25Gm", specs: "", weight: "", amount: 6, category: "Lebensmittel", date: "", reason: "" },
{ ean: "788821001207", name: "Shan Garlic Paste 700Gm", specs: "", weight: "", amount: 11, category: "Lebensmittel", date: "", reason: "" },
{ ean: "788821001214", name: "Shan Ginger Garlic Paste 700Gm", specs: "", weight: "", amount: 5, category: "Lebensmittel", date: "", reason: "" },
{ ean: "788821010025", name: "Shan Mixed Pickel 680Gm", specs: "", weight: "", amount: 3, category: "Lebensmittel", date: "", reason: "" },
{ ean: "788821012029", name: "Shan Tikka Seekh Kabab Gm", specs: "", weight: "", amount: 5, category: "Lebensmittel", date: "", reason: "" },


{ ean: "788821041142", name: "Shan Pilau Biryani 50Gm", specs: "", weight: "", amount: 12, category: "Lebensmittel", date: "", reason: "" },
{ ean: "788821060051", name: "Shan Fish Biriani 50Gm", specs: "", weight: "", amount: 14, category: "Lebensmittel", date: "", reason: "" },
{ ean: "788821066022", name: "Shan Chicken Ginger Gm", specs: "", weight: "", amount: 9, category: "Lebensmittel", date: "", reason: "" },
{ ean: "788821067142", name: "Shan Haleem Gm", specs: "", weight: "", amount: 20, category: "Lebensmittel", date: "", reason: "" },
{ ean: "788821101051", name: "Shan Pani Puri Masala Gm", specs: "", weight: "", amount: 8, category: "Lebensmittel", date: "", reason: "" },
{ ean: "788821110053", name: "Shan Chicken White Karahi Gm", specs: "", weight: "", amount: 5, category: "Lebensmittel", date: "", reason: "" },
{ ean: "788821122124", name: "Shan Biryani 50Gm", specs: "", weight: "", amount: 29, category: "Lebensmittel", date: "", reason: "" },
{ ean: "8011845300554", name: "Hayat Kaynag Olivenoil 1L", specs: "", weight: "", amount: 6, category: "Lebensmittel", date: "", reason: "" },
{ ean: "816387000058", name: "Tropical Plantain Chips Lightly Salted 85Gm", specs: "", weight: "", amount: 2, category: "Lebensmittel", date: "", reason: "" },
{ ean: "816387000140", name: "Tropical Plantain Chips Naturally Sweet 85Gm", specs: "", weight: "", amount: 35, category: "Lebensmittel", date: "", reason: "" },
{ ean: "8169003009297", name: "Aci Fun Salty Nimki 150Gm", specs: "", weight: "", amount: 15, category: "Lebensmittel", date: "", reason: "" },
{ ean: "8169003009556", name: "Ark Murali 300Gm", specs: "", weight: "", amount: 4, category: "Lebensmittel", date: "", reason: "" },
{ ean: "8684180520705", name: "Frozo Mango 250Ml", specs: "", weight: "", amount: 115, category: "Getränke", date: "", reason: "" },
{ ean: "8684180520729", name: "Frozo Fruit 250Ml", specs: "", weight: "", amount: 115, category: "Getränke", date: "", reason: "" },

{ ean: "8697449904444", name: "Mahmood Basmati 1121 Sella Rice 5Kg", specs: "", weight: "", amount: 1, category: "Lebensmittel", date: "", reason: "" },
{ ean: "8697449916522", name: "Mahmood Coffee 200Gm", specs: "", weight: "", amount: 20, category: "Lebensmittel", date: "", reason: "" },
{ ean: "8711135571465", name: "Al-Raii Fleischerzeugnis Aus Huhn 340Gm", specs: "", weight: "", amount: 8, category: "Lebensmittel", date: "", reason: "" },
{ ean: "8711135572325", name: "Al-Raii Fleischerzeugnis Aus Rind 340Gm", specs: "", weight: "", amount: 15, category: "Lebensmittel", date: "", reason: "" },
{ ean: "8712857981068", name: "Chupa Chups Sparkling Grape Fruit 345Ml", specs: "", weight: "", amount: 5, category: "Getränke", date: "", reason: "" },
{ ean: "8715000998630", name: "Nestle Nido 400Gm", specs: "", weight: "", amount: 17, category: "Lebensmittel", date: "", reason: "" },
{ ean: "8715017060047", name: "A.F.P. Fioretto Maize Flour 1Kg", specs: "", weight: "", amount: 9, category: "Lebensmittel", date: "", reason: "" },
{ ean: "8716944000007", name: "Noffoods Paneer 400Gm", specs: "", weight: "", amount: 10, category: "Lebensmittel", date: "", reason: "" },
{ ean: "8718182611052", name: "Evergreat Rice Vermicelli 400Gm", specs: "", weight: "", amount: 12, category: "Lebensmittel", date: "", reason: "" },
{ ean: "8718481572016", name: "African Beauty Plantain Fufu 681Gm", specs: "", weight: "", amount: 3, category: "Lebensmittel", date: "", reason: "" },

{ ean: "8718481572023", name: "African Beauty Cocoyam Fufu 681Gm", specs: "", weight: "", amount: 12, category: "Lebensmittel", date: "", reason: "" },
{ ean: "8719497391837", name: "Wabu Sweet Tamarind 450Gm", specs: "", weight: "", amount: 4, category: "Lebensmittel", date: "", reason: "" },
{ ean: "8719497398225", name: "Bamboo Shoot (Whole) 567Gm", specs: "", weight: "", amount: 24, category: "Lebensmittel", date: "", reason: "" },
{ ean: "8719747020555", name: "Guinea Fresh Palm Oil 1000Gm", specs: "", weight: "", amount: 2, category: "Lebensmittel", date: "", reason: "" },
{ ean: "8720608011599", name: "Lipton Yellow Label 100 Tea Bag 150Gm", specs: "", weight: "", amount: 12, category: "Lebensmittel", date: "", reason: "" },
{ ean: "8720608039593", name: "Pg Tips 40 Tea Bags 116Gm", specs: "", weight: "", amount: 12, category: "Lebensmittel", date: "", reason: "" },
{ ean: "8850100004888", name: "Wai Wai Bihoon Rice Vermicelli 500Gm", specs: "", weight: "", amount: 1, category: "Lebensmittel", date: "", reason: "" },
{ ean: "8850369014345", name: "Fitne Herbal Green Tea 40Gm", specs: "", weight: "", amount: 2, category: "Lebensmittel", date: "", reason: "" },
{ ean: "8850521950351", name: "Chantaboon Rice Stick 3Mm 400Gm", specs: "", weight: "", amount: 60, category: "Lebensmittel", date: "", reason: "" },
{ ean: "8850987101083", name: "Mama Noodles Shrimp Tom Yum 60Gm", specs: "", weight: "", amount: 16, category: "Lebensmittel", date: "", reason: "" },
{ ean: "8850987123405", name: "Mama Cup Seafood 70Gm", specs: "", weight: "", amount: 16, category: "Lebensmittel", date: "", reason: "" },
{ ean: "8850987123429", name: "Mama Cup Beef 70Gm", specs: "", weight: "", amount: 12, category: "Lebensmittel", date: "", reason: "" },
{ ean: "8850987123528", name: "Mama Cup Shrimp Tom Yum 70Gm", specs: "", weight: "", amount: 15, category: "Lebensmittel", date: "", reason: "" },
{ ean: "8850987131776", name: "Mama Noodles Shrimp Tom Yum 90Gm", specs: "", weight: "", amount: 8, category: "Lebensmittel", date: "", reason: "" },
{ ean: "8850987146084", name: "Mama Cup Shrimp Creamy Tom Yum 70Gm", specs: "", weight: "", amount: 9, category: "Lebensmittel", date: "", reason: "" },
{ ean: "8851613005867", name: "Coconut Cream 400Ml", specs: "", weight: "", amount: 20, category: "Getränke", date: "", reason: "" },
{ ean: "8851613105949", name: "Royal Thai Coconut Milk 400Ml", specs: "", weight: "", amount: 18, category: "Getränke", date: "", reason: "" },
{ ean: "8851876200214", name: "Mama Rice Vermicelli 400Gm", specs: "", weight: "", amount: 40, category: "Lebensmittel", date: "", reason: "" },

{ ean: "8852018101017", name: "Yum Yum Noodles Beef 60Gm", specs: "", weight: "", amount: 4, category: "Lebensmittel", date: "", reason: "" },
{ ean: "8852018101024", name: "Yum Yum Noodles Chicken 60Gm", specs: "", weight: "", amount: 8, category: "Lebensmittel", date: "", reason: "" },
{ ean: "8852018101062", name: "Yum Yum Noodles Vegetable 60Gm", specs: "", weight: "", amount: 6, category: "Lebensmittel", date: "", reason: "" },
{ ean: "8858838100018", name: "Bigen Men's Beard Color", specs: "", weight: "", amount: 6, category: "Lebensmittel", date: "", reason: "" },
{ ean: "8901441010011", name: "Lijjat Jeera Papad 200Gm", specs: "", weight: "", amount: 15, category: "Lebensmittel", date: "", reason: "" },
{ ean: "8901725008895", name: "Ashirvaad Atta 10Kg", specs: "", weight: "", amount: 1, category: "Lebensmittel", date: "", reason: "" },
{ ean: "8901725150105", name: "Ashirvaad Atta 5Kg", specs: "", weight: "", amount: 2, category: "Lebensmittel", date: "", reason: "" },
{ ean: "8902167000195", name: "Mdh Kasoori Methi 500Gm", specs: "", weight: "", amount: 3, category: "Lebensmittel", date: "", reason: "" },
{ ean: "890975104069", name: "Bombay Sweet Tandori Chanachur 300Gm", specs: "", weight: "", amount: 1, category: "Lebensmittel", date: "", reason: "" },
{ ean: "890979000046", name: "Bombay Sweets Normal Chanachur 300Gm", specs: "", weight: "", amount: 5, category: "Lebensmittel", date: "", reason: "" },
{ ean: "890979000176", name: "Bombay Sweet Classic Chanachur 600Gm", specs: "", weight: "", amount: 65, category: "Lebensmittel", date: "", reason: "" },
{ ean: "890979000428", name: "Bombay Sweet Bbq Chanachur 300Gm", specs: "", weight: "", amount: 20, category: "Lebensmittel", date: "", reason: "" },
{ ean: "890979000619", name: "Bombay Sweet Normal Chanachur Jar 300Gm", specs: "", weight: "", amount: 40, category: "Lebensmittel", date: "", reason: "" },
{ ean: "8933607022842", name: "Guilin Rice Vermicelli 300Gm", specs: "", weight: "", amount: 18, category: "Lebensmittel", date: "", reason: "" },
{ ean: "8936007820537", name: "Bun Tuoi Bamboo Tree Rice Vermicelli 908Gm", specs: "", weight: "", amount: 12, category: "Lebensmittel", date: "", reason: "" },
{ ean: "8941100294833", name: "Maggi Noodles Masala 250Gm", specs: "", weight: "", amount: 27, category: "Lebensmittel", date: "", reason: "" },
{ ean: "8941100294840", name: "Maggi Noodles Masala (8X62G) 496Gm", specs: "", weight: "", amount: 12, category: "Lebensmittel", date: "", reason: "" },
{ ean: "8941100513217", name: "Ruchi Bbq Chanachur 300Gm", specs: "", weight: "", amount: 18, category: "Lebensmittel", date: "", reason: "" },
{ ean: "8941100513224", name: "Ruchi Hot Chanachur 300Gm", specs: "", weight: "", amount: 18, category: "Lebensmittel", date: "", reason: "" },
{ ean: "8941114000116", name: "Bonoful Chanachur 300Gm", specs: "", weight: "", amount: 18, category: "Lebensmittel", date: "", reason: "" },
{ ean: "8941114000260", name: "Bonoful Hot Chanachur 300Gm", specs: "", weight: "", amount: 8, category: "Lebensmittel", date: "", reason: "" },
{ ean: "8941114000352", name: "Banoful Masala Mix Chanachur Jar 300Gm", specs: "", weight: "", amount: 25, category: "Lebensmittel", date: "", reason: "" },

{ ean: "8941114000536", name: "Bonoful Ghee Toast Biscuit 320Gm", specs: "", weight: "", amount: 9, category: "Lebensmittel", date: "", reason: "" },
{ ean: "8941114000543", name: "Bonoful Bela Biscuit 300Gm", specs: "", weight: "", amount: 2, category: "Lebensmittel", date: "", reason: "" },
{ ean: "8941114000550", name: "Bonoful B. Toast 300Gm", specs: "", weight: "", amount: 11, category: "Lebensmittel", date: "", reason: "" },
{ ean: "8941114000574", name: "Bonoful Sugar Toast 300Gm", specs: "", weight: "", amount: 20, category: "Lebensmittel", date: "", reason: "" },
{ ean: "8941114000581", name: "Bonoful Special Toast 300Gm", specs: "", weight: "", amount: 10, category: "Lebensmittel", date: "", reason: "" },
{ ean: "8941114000598", name: "Bonoful Nimki Biscuit 250Gm", specs: "", weight: "", amount: 11, category: "Lebensmittel", date: "", reason: "" },
{ ean: "8941114000604", name: "Bonoful Dry Cake 300Gm", specs: "", weight: "", amount: 6, category: "Lebensmittel", date: "", reason: "" },


  { ean: "8941114000802", name: "Kishwan Sweet Toast 250Gm", specs: "", weight: "", amount: 10, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941114001236", name: "Bonoful Energy Buiscuit 200Gm", specs: "", weight: "", amount: 10, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941114005883", name: "Kischwan Rio Peenut Cookies 230Gm", specs: "", weight: "", amount: 5, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941114005999", name: "Kishwan Tea Toast 200Gm", specs: "", weight: "", amount: 13, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941114006057", name: "Kishwan Horlicks Biscuit 300Gm", specs: "", weight: "", amount: 9, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941114006064", name: "Kishwan Dry Cake 300Gm", specs: "", weight: "", amount: 4, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941114006163", name: "Kishwan Saltin Salted Cookies 60Gm", specs: "", weight: "", amount: 30, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941114006194", name: "Kishwan Kulfi Bite 220Gm", specs: "", weight: "", amount: 14, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941114006330", name: "Kishwan Butter Cookies 200Gm", specs: "", weight: "", amount: 9, category: "Lebensmittel", date: "", reason: "" },

  { ean: "8941114006590", name: "Kishwan Peanut Cookies 725Gm", specs: "", weight: "", amount: 6, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941114006606", name: "Kishwan  Cocont Cookies 725Gm", specs: "", weight: "", amount: 1, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941114006613", name: "Kishwan Nan Khatai Cookies 250Gm", specs: "", weight: "", amount: 6, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941114006958", name: "Kishwan Soan Papry 150Gm", specs: "", weight: "", amount: 13, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941152000222", name: "Danish Florida Orange 165Gm", specs: "", weight: "", amount: 2, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941152000437", name: "Danish Toast 300Gm", specs: "", weight: "", amount: 11, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941152010726", name: "Danish Max Milk Biscuits 70Gm", specs: "", weight: "", amount: 8, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941152012645", name: "Danish 2Fun Noodles (Chicken F 496Gm", specs: "", weight: "", amount: 4, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941152014243", name: "Danish Mango Fruit Drinks 250Ml", specs: "", weight: "", amount: 16, category: "Getränke", date: "", reason: "" },
  { ean: "8941152014625", name: "Danish 2Fun Noodles (Masala F 400Gm", specs: "", weight: "", amount: 7, category: "Lebensmittel", date: "", reason: "" },

  
    { ean: "8941154031477", name: "Bombay Sweet Bombay Mix 300Gm", specs: "", weight: "", amount: 13, category: "Lebensmittel", date: "", reason: "" },
    { ean: "8941193311288", name: "Ispahani Mori Toast 300Gm", specs: "", weight: "", amount: 4, category: "Lebensmittel", date: "", reason: "" },
    { ean: "8941193311752", name: "Ispahani Lexus Vegetable Crackers Biscuits 210Gm", specs: "", weight: "", amount: 11, category: "Lebensmittel", date: "", reason: "" },
    { ean: "8941193311776", name: "Ispahani Milk Marie Biscuit 210Gm", specs: "", weight: "", amount: 2, category: "Lebensmittel", date: "", reason: "" },
    { ean: "8941193311905", name: "Ispahani Puffy Bite Lemon Cream Sanwish Biscuit 150Gm", specs: "", weight: "", amount: 6, category: "Lebensmittel", date: "", reason: "" },
    { ean: "8964000122075", name: "Hamdard Roohafza 800Ml", specs: "", weight: "", amount: 8, category: "Getränke", date: "", reason: "" },
    { ean: "8994963002831", name: "Indomie Noodles Chicken 5X70G", specs: "", weight: "", amount: 16, category: "Lebensmittel", date: "", reason: "" },
    { ean: "8994963002930", name: "Indomie Cup Noodles Chicken 60Gm", specs: "", weight: "", amount: 6, category: "Lebensmittel", date: "", reason: "" },
    { ean: "8994963003586", name: "Indomie Noodles Chicken Goumut 5X70G", specs: "", weight: "", amount: 16, category: "Lebensmittel", date: "", reason: "" },
   
    
      { ean: "90162565", name: "Redbull Energy Drink 250Ml", specs: "", weight: "", amount: 96, category: "Getränke", date: "", reason: "" },
      { ean: "8941114000710", name: "Bonoful Toast 300G", specs: "", weight: "", amount: 1, category: "Lebensmittel", date: "", reason: "" },
      { ean: "8941193311271", name: "Ispahani Bakery  Fresh Sweet Toast 300Gm", specs: "", weight: "", amount: 1, category: "Lebensmittel", date: "", reason: "" },
      { ean: "617285467819", name: "Fresh Food Gram Floor 1000Gm", specs: "", weight: "", amount: 15, category: "Lebensmittel", date: "", reason: "" },
      { ean: "617285468618", name: "Fresh Food Wild Celery 50", specs: "", weight: "", amount: 17, category: "Lebensmittel", date: "", reason: "" },
      { ean: "4061458000802", name: "Westcliff Gruner Tee 25 Bags", specs: "", weight: "", amount: 1, category: "Lebensmittel", date: "", reason: "" },
      { ean: "8941193314043", name: "Ispahani Mirzapore Tea Bag 100 Teabags Inside", specs: "", weight: "", amount: 12, category: "Lebensmittel", date: "", reason: "" },
      { ean: "8941193314036", name: "Ispahani Mirzapore Tea Bag 50 Teabags Inside", specs: "", weight: "", amount: 50, category: "Lebensmittel", date: "", reason: "" },
      { ean: "8941193314098", name: "Ispahani Blender Choice Black Tea 400G", specs: "", weight: "", amount: 12, category: "Lebensmittel", date: "", reason: "" },
      { ean: "8941193314074", name: "Ispahani Blender Choice Black Tea 100G", specs: "", weight: "", amount: 1, category: "Lebensmittel", date: "", reason: "" },
    
      
        { ean: "8941114000345", name: "Banoful Masala Mix Chanachur 300Gm", specs: "", weight: "", amount: 13, category: "Lebensmittel", date: "", reason: "" },
        { ean: "841165126934", name: "7days Vegetable Samosa Mini 50P 400G", specs: "", weight: "", amount: 100, category: "Gefroren", date: "", reason: "" },
        { ean: "841165125470", name: "7days Samosa Vegetable 10P 400G", specs: "", weight: "", amount: 13, category: "Gefroren", date: "", reason: "" },
        { ean: "841165127795", name: "7days Panjabi Samosa 10P 800G", specs: "", weight: "", amount: 20, category: "Gefroren", date: "", reason: "" },
        { ean: "841165125494", name: "7days Springroll Vegetable 10P 400G", specs: "", weight: "", amount: 40, category: "Gefroren", date: "", reason: "" },
        { ean: "841165125487", name: "7days Singara Vegetable 10P 400G", specs: "", weight: "", amount: 110, category: "Gefroren", date: "", reason: "" },
        { ean: "841165125456", name: "7days Dal Puri 10P 454G", specs: "", weight: "", amount: 26, category: "Gefroren", date: "", reason: "" },
        { ean: "720524731777", name: "Mughal Veg. Samosa 15Pcs 300G", specs: "", weight: "", amount: 3, category: "Gefroren", date: "", reason: "" },
        { ean: "3008801268008", name: "7Days Kachur Loti 400G", specs: "", weight: "", amount: 80, category: "Gefroren", date: "", reason: "" },
        { ean: "3008801268039", name: "7days Mixed Vegetables & Shrimp 400G", specs: "", weight: "", amount: 7, category: "Gefroren", date: "", reason: "" },
      
        
          { ean: "720524736321", name: "Sabjiana Been Seeds 400G", specs: "", weight: "", amount: 10, category: "Gefroren", date: "", reason: "" },
          { ean: "8001022417303", name: "Jc Seem Seeds Clean 400G", specs: "", weight: "", amount: 2, category: "Gefroren", date: "", reason: "" },
          { ean: "720524736413", name: "Shabjiana Deshi Sheem 400G", specs: "", weight: "", amount: 20, category: "Gefroren", date: "", reason: "" },
          { ean: "4260058596788", name: "Crown Frozen Shredded Coconut 340G", specs: "", weight: "", amount: 32, category: "Gefroren", date: "", reason: "" },
          { ean: "841165125517", name: "7days Kulsum Fam. Parata 1600G", specs: "", weight: "", amount: 30, category: "Gefroren", date: "", reason: "" },
          { ean: "720524731289", name: "Mughal Plain Paratha (Fam. Pack) 20P 1.6Kg", specs: "", weight: "", amount: 2, category: "Gefroren", date: "", reason: "" },
          { ean: "720524731319", name: "Mughal Plain Paratha (Fam. Pack) 30P 2400G", specs: "", weight: "", amount: 7, category: "Gefroren", date: "", reason: "" },
          { ean: "840205754465", name: "7days Ruti Chapati 1Kg", specs: "", weight: "", amount: 16, category: "Gefroren", date: "", reason: "" },
          { ean: "5060749790155", name: "Zulekha Chicken Paratha 10P 850G", specs: "", weight: "", amount: 5, category: "Gefroren", date: "", reason: "" },
          { ean: "840205754427", name: "7days Chitai Pitha 8P 400G", specs: "", weight: "", amount: 1, category: "Gefroren", date: "", reason: "" },
          { ean: "840205754441", name: "7days Gur Shandesh Pitha 10P 400G", specs: "", weight: "", amount: 22, category: "Gefroren", date: "", reason: "" },
        
          { ean: "3280310113820", name: "Doux Strong Chicken 1300G", specs: "", weight: "", amount: 1, category: "Ffleischwaren", date: "", reason: "" },
          { ean: "8001022417304", name: "Doux Strong Chicken 1400G", specs: "", weight: "", amount: 1, category: "Ffleischwaren", date: "", reason: "" },
          { ean: "3280310114025", name: "Doux Strong Chicken 1200G", specs: "", weight: "", amount: 6, category: "Ffleischwaren", date: "", reason: "" },
          { ean: "8001022417305", name: "Wiesenhof Ente Halal 2400G", specs: "", weight: "", amount: 1, category: "Ffleischwaren", date: "", reason: "" },
          { ean: "8001022417306", name: "Wiesenhof Ente Halal 2200G", specs: "", weight: "", amount: 7, category: "Ffleischwaren", date: "", reason: "" },
          { ean: "8001022417307", name: "Chepa Shutki 200G", specs: "", weight: "", amount: 75, category: "Ffleischwaren", date: "", reason: "" },
          { ean: "8888003150500", name: "Tyj Spring Roll Sheets 50P 400G", specs: "", weight: "", amount: 115, category: "Ffleischwaren", date: "", reason: "" },
          { ean: "8001022417308", name: "Patali Gur", specs: "", weight: "", amount: 7, category: "Lebensmittel", date: "", reason: "" },
          { ean: "3008801268077", name: "7Days Bean Seed /Seemerdana 400G", specs: "", weight: "", amount: 22, category: "Gefroren", date: "", reason: "" },
          { ean: "720524736703", name: "7Days Kakrol 400G", specs: "", weight: "", amount: 23, category: "Gefroren", date: "", reason: "" },
          { ean: "617285468816", name: "Fresh Food Khejurer Gur kg", specs: "", weight: "", amount: 10, category: "Gefroren", date: "", reason: "" },
          { ean: "720524737052", name: "Shabjiana Khejur Gur 500G kg 10 euro", specs: "", weight: "", amount: 17, category: "Gefroren", date: "", reason: "" },
          { ean: "841165111275", name: "7Days Satkora 300G", specs: "", weight: "", amount: 4, category: "Gefroren", date: "", reason: "" },
          { ean: "300880126809", name: "Satkora 300G", specs: "", weight: "", amount: 2, category: "Gefroren", date: "", reason: "" },
          { ean: "5027891372899", name: "Morcha Gur 500G", specs: "", weight: "", amount: 17, category: "Gefroren", date: "", reason: "" },
          { ean: "8713913003328", name: "Black Tiger Shrimp Hoso 31 /40 1 Kg Asian Choice", specs: "", weight: "", amount: 4, category: "Ffleischwaren", date: "", reason: "" },
          { ean: "8713913003304", name: "Black Tiger Shrimp Hoso21 /30 1 Kg Asian Choice", specs: "", weight: "", amount: 3, category: "Ffleischwaren", date: "", reason: "" },
          { ean: "4050416548043", name: "7Days Giant Tiger Shrimp 16/20 1Kg", specs: "", weight: "", amount: 1, category: "Ffleischwaren", date: "", reason: "" },
          { ean: "8720168352378", name: "Pangasius Steaks (150 - 300G) 1Kg", specs: "", weight: "", amount: 5, category: "Ffleischwaren", date: "", reason: "" },
          { ean: "8001022417309", name: "King Fish Loose +- 1Kg", specs: "", weight: "", amount: 7, category: "Ffleischwaren", date: "", reason: "" },
          { ean: "8001022417401", name: "Hilsha Mm 7Days 1000G+", specs: "", weight: "", amount: 4, category: "Ffleischwaren", date: "", reason: "" },
          { ean: "8721022015651", name: "Boal 4000-5000G", specs: "", weight: "", amount: 30, category: "Ffleischwaren", date: "", reason: "" },
          { ean: "8001022417402", name: "7days Shorputi 800G+", specs: "", weight: "", amount: 44, category: "Ffleischwaren", date: "", reason: "" },
          { ean: "8001022417403", name: "Shorputi 800G+", specs: "", weight: "", amount: 13, category: "Ffleischwaren", date: "", reason: "" },
          { ean: "5060010183426", name: "Shoil Bd 800G+", specs: "", weight: "", amount: 10, category: "Ffleischwaren", date: "", reason: "" },
          { ean: "8001022417404", name: "Ayer Bd 1000G+", specs: "", weight: "", amount: 11, category: "Ffleischwaren", date: "", reason: "" },
          { ean: "8001022417405", name: "Folly Fish 1kg", specs: "", weight: "", amount: 4, category: "Ffleischwaren", date: "", reason: "" },
          { ean: "8001022417406", name: "Chital Mm 2Kg+", specs: "", weight: "", amount: 4, category: "Ffleischwaren", date: "", reason: "" },
          { ean: "8001022417407", name: "Chital Mm 6Kg+", specs: "", weight: "", amount: 2, category: "Ffleischwaren", date: "", reason: "" },
          { ean: "8001022417408", name: "Rohu 2Kg+", specs: "", weight: "", amount: 36, category: "Ffleischwaren", date: "", reason: "" },
          { ean: "8001022417409", name: "Kali Boush 1.5Kg +", specs: "", weight: "", amount: 2, category: "Ffleischwaren", date: "", reason: "" },
          { ean: "690770444083", name: "Ayer Steak (Block) 500G", specs: "", weight: "", amount: 54, category: "Ffleischwaren", date: "", reason: "" },
          { ean: "690770445547", name: "Pata/Star Baim 500G", specs: "", weight: "", amount: 17, category: "Ffleischwaren", date: "", reason: "" },
          { ean: "8001022417451", name: "Hilsha Nona", specs: "", weight: "", amount: 16, category: "Ffleischwaren", date: "", reason: "" },


{ ean: "690770446131", name: "Taki 500G", specs: "", weight: "", amount: 35, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "690770445455", name: "Mixed Fish 250G", specs: "", weight: "", amount: 22, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "8001022417452", name: "Mrigal Mm 4Kg+", specs: "", weight: "", amount: 14, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "8001022417453", name: "Rohu 4Kg+", specs: "", weight: "", amount: 5, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "8001022417454", name: "Pangasius 3Kg+", specs: "", weight: "", amount: 7, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "8001022417455", name: "Koral 3Kg+", specs: "", weight: "", amount: 1, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "8001022417456", name: "Koral 2Kg+", specs: "", weight: "", amount: 2, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "690770445448", name: "Meni 500G", specs: "", weight: "", amount: 3, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "8716789003348", name: "Baracuda 1Kg", specs: "", weight: "", amount: 5, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "5008801261007", name: "Pabda 500G", specs: "", weight: "", amount: 34, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "5060044896262", name: "Keski 250G", specs: "", weight: "", amount: 60, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "5008801262004", name: "Tengra 500G", specs: "", weight: "", amount: 1, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "5008801267009", name: "Bacha Fish 500G", specs: "", weight: "", amount: 35, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "5008801261083", name: "Koral Small 500G", specs: "", weight: "", amount: 41, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "690770444984", name: "Chapila 500G", specs: "", weight: "", amount: 2, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "8718503226231", name: "Ultimate Pangasius Malangwa 500G-1000G 4Kg", specs: "", weight: "", amount: 16, category: "Ffleischwaren", date: "", reason: "" },


  { ean: "5060044896279", name: "Taposhi 250G", specs: "", weight: "", amount: 3, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "5008801262561", name: "Poa 500G", specs: "", weight: "", amount: 7, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "5060044896002", name: "Ruhu Egg 250G", specs: "", weight: "", amount: 24, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "2508801262552", name: "Baspata 250G", specs: "", weight: "", amount: 27, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "2508801262408", name: "Puti F. Blk Bd, 250G", specs: "", weight: "", amount: 3, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "5008801261137", name: "Lotia Bd 500G", specs: "", weight: "", amount: 14, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "690770446056", name: "Shing 500G", specs: "", weight: "", amount: 13, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "690770444236", name: "Baila 500G", specs: "", weight: "", amount: 24, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "8718858728503", name: "Kupila 900G", specs: "", weight: "", amount: 4, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "8718503220062", name: "Black Tilapia Gutted 800G+ Loose", specs: "", weight: "", amount: 45, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "5407005822586", name: "Thomson 1Kg +- Loose", specs: "", weight: "", amount: 20, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "8001022417457", name: "Mackerel 300 - 500G Loose", specs: "", weight: "", amount: 50, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "8720663432612", name: "Magur 800G+", specs: "", weight: "", amount: 3, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "8001022417458", name: "Africa Village Cow Meat 1Kg", specs: "", weight: "", amount: 16, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "8001022417459", name: "Rindfleish 1Kg", specs: "", weight: "", amount: 4, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "8001022417461", name: "Rindfleish 2Kg", specs: "", weight: "", amount: 4, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "8001022417462", name: "Goat/Ziege 2Kg", specs: "", weight: "", amount: 7, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "5027891368854", name: "Keski Tray 250G", specs: "", weight: "", amount: 5, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "690770445516", name: "Nola 500G", specs: "", weight: "", amount: 4, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "690770446230", name: "Chiring 500G", specs: "", weight: "", amount: 7, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "2508801261784", name: "Khalisha 250G", specs: "", weight: "", amount: 2, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "690770445493", name: "Molla 250G", specs: "", weight: "", amount: 22, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "690770444243", name: "Baila Small 250G", specs: "", weight: "", amount: 36, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "8001022417463", name: "Gutum 250G", specs: "", weight: "", amount: 19, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "690770445875", name: "Small Baim 250G", specs: "", weight: "", amount: 9, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "690770445165", name: "Koi 500G", specs: "", weight: "", amount: 22, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "690770446162", name: "Tilapia Block 500G", specs: "", weight: "", amount: 17, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "2369690006708", name: "Quaglie Surgelate 670G", specs: "", weight: "", amount: 11, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "8169003004841", name: "Aci Pure Biriani Masala 40g", specs: "", weight: "", amount: 40, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941100511206", name: "Radhuni Roast Masala 35g", specs: "", weight: "", amount: 4, category: "Lebensmittel", date: "", reason: "" },
  { ean: "617285465365", name: "Fresh Food Coconut cockies 700g", specs: "", weight: "", amount: 5, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941114005487", name: "Kishwan Spicy Mango Candy jar 150 pcs", specs: "", weight: "", amount: 5, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941114005470", name: "Kishwan Spicy Tetul Candy jar 150 pcs", specs: "", weight: "", amount: 2, category: "Lebensmittel", date: "", reason: "" },
  { ean: "909790009692", name: "Mr. Twist 18g", specs: "", weight: "", amount: 20, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8941193310465", name: "Mighty Chips 20g", specs: "", weight: "", amount: 20, category: "Lebensmittel", date: "", reason: "" },
  { ean: "5063270100189", name: "Pg Tips 300 Tea bag", specs: "", weight: "", amount: 8, category: "Lebensmittel", date: "", reason: "" },
  { ean: "5011157330600", name: "Tild Broken basmati 20 kg", specs: "", weight: "", amount: 8, category: "Rice", date: "", reason: "" },
  { ean: "5020580410902", name: "LAILA GOLDEN SELLA EASY COOK BASMATI Rice 20KG", specs: "", weight: "", amount: 9, category: "Rice", date: "", reason: "" },
  { ean: "5407005821268", name: "DESI BASMATI 1121 GRAND EXTRA LONG RICE 20KG", specs: "", weight: "", amount: 8, category: "Rice", date: "", reason: "" },
  { ean: "5407005821770", name: "Royal village Jasmin Rice 4.5 kg", specs: "", weight: "", amount: 5, category: "Rice", date: "", reason: "" },
  { ean: "5407005821800", name: "Royal village Jasmin Rice 18 kg", specs: "", weight: "", amount: 3, category: "Rice", date: "", reason: "" },
  { ean: "5011157200606", name: "AKASH BASMATI RICE 20KG", specs: "", weight: "", amount: 2, category: "Rice", date: "", reason: "" },
  { ean: "7860000001048", name: "Royal Village Golden Sella Basmati Rice 20kg", specs: "", weight: "", amount: 5, category: "Rice", date: "", reason: "" },
  { ean: "8719632250241", name: "DAAWAT BROKEN BASMATI RICE 20KG", specs: "", weight: "", amount: 3, category: "Rice", date: "", reason: "" },
  { ean: "4019041106240", name: "HEER LONG GRAIN BASMATI RICE 20 kg", specs: "", weight: "", amount: 7, category: "Rice", date: "", reason: "" },
  { ean: "8719632250074", name: "DAAWAT EXTRA LONG BASMATI RICE 20KG", specs: "", weight: "", amount: 1, category: "Rice", date: "", reason: "" },
  { ean: "5011157030500", name: "Tilda Pure Basmati Rice10kg", specs: "", weight: "", amount: 3, category: "Rice", date: "", reason: "" },
  { ean: "8964003511029", name: "GUARD ULTIMATE 1121 LONG BASMATI RICE10 5KG", specs: "", weight: "", amount: 16, category: "Rice", date: "", reason: "" },
  { ean: "5017689000479", name: "Trs Chick Peas 500g", specs: "", weight: "", amount: 20, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8713575144063", name: "Red Onion 1kg", specs: "", weight: "", amount: 10, category: "Lebensmittel", date: "", reason: "" },
  { ean: "8713575060561", name: "Onion 1kg", specs: "", weight: "", amount: 10, category: "Lebensmittel", date: "", reason: "" },
  { ean: "5008801261113", name: "Hilsa egg 250gm", specs: "", weight: "", amount: 60, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "5008801261151", name: "Koi lose 800gm", specs: "", weight: "", amount: 20, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "2508801265676", name: "Butum 250gm blk", specs: "", weight: "", amount: 30, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "8936193921001", name: "Baby Shrimp 212g", specs: "", weight: "", amount: 10, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "8801261000080", name: "Harina Shrimp 250g", specs: "", weight: "", amount: 15, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "8013022519121", name: "Katla 3kg+", specs: "", weight: "", amount: 1, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "8013022519122", name: "Katla 5kg+", specs: "", weight: "", amount: 1, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "8013022519123", name: "Katla 6kg+", specs: "", weight: "", amount: 5, category: "Ffleischwaren", date: "", reason: "" },
  { ean: "5011157330402", name: "Tild Broken basmati 10 kg", specs: "", weight: "", amount: 10, category: "Rice", date: "", reason: "" }

];
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

// ========================== INITIAL RENDER ==========================
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
}, 10000); // 🔄 refresh every 10 seconds (you can change this)
