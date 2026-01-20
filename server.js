const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Base de données produits (stockage en JSON simple)
const productsFile = path.join(__dirname, 'data', 'products.json');

function ensureDataDir() {
  const dataDir = path.join(__dirname, 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

function loadProducts() {
  ensureDataDir();
  try {
    if (fs.existsSync(productsFile)) {
      return JSON.parse(fs.readFileSync(productsFile, 'utf8'));
    }
  } catch (err) {
    console.error('Erreur chargement produits:', err);
  }
  return [];
}

function saveProducts(products) {
  ensureDataDir();
  fs.writeFileSync(productsFile, JSON.stringify(products, null, 2));
}

// Route d'accueil
app.get('/', (req, res) => {
  const products = loadProducts();
  res.render('index', { products });
});

// Page admin
app.get('/admin', (req, res) => {
  const products = loadProducts();
  res.render('admin', { products });
});

// API: Obtenir tous les produits
app.get('/api/products', (req, res) => {
  const products = loadProducts();
  res.json(products);
});

// API: Ajouter un produit
app.post('/api/products', (req, res) => {
  const products = loadProducts();
  const newProduct = {
    id: Date.now().toString(),
    title: req.body.title,
    description: req.body.description,
    price: parseFloat(req.body.price),
    currency: req.body.currency || 'EUR',
    image_url: req.body.image_url,
    category: req.body.category,
    availability: req.body.availability || 'in_stock',
    gtin: req.body.gtin || '',
    mpn: req.body.mpn || '',
    brand: req.body.brand || '',
    created_at: new Date().toISOString()
  };
  products.push(newProduct);
  saveProducts(products);
  res.json(newProduct);
});

// API: Supprimer un produit
app.delete('/api/products/:id', (req, res) => {
  let products = loadProducts();
  products = products.filter(p => p.id !== req.params.id);
  saveProducts(products);
  res.json({ success: true });
});

// API: Mettre à jour un produit
app.put('/api/products/:id', (req, res) => {
  let products = loadProducts();
  const index = products.findIndex(p => p.id === req.params.id);
  if (index !== -1) {
    products[index] = { ...products[index], ...req.body };
    saveProducts(products);
    res.json(products[index]);
  } else {
    res.status(404).json({ error: 'Produit non trouvé' });
  }
});

// Flux Google Merchant (XML)
app.get('/feed/google-merchant.xml', (req, res) => {
  const products = loadProducts();
  res.type('application/xml');
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">\n';
  xml += '  <channel>\n';
  xml += '    <title>Elinor Test Store</title>\n';
  xml += '    <link>http://localhost:3000</link>\n';
  xml += '    <description>Test Store for Google Merchant</description>\n';
  
  products.forEach(product => {
    xml += '    <item>\n';
    xml += `      <g:id>${escapeXml(product.id)}</g:id>\n`;
    xml += `      <title>${escapeXml(product.title)}</title>\n`;
    xml += `      <description>${escapeXml(product.description)}</description>\n`;
    xml += `      <g:price>${product.price} ${product.currency}</g:price>\n`;
    xml += `      <g:image_link>${escapeXml(product.image_url)}</g:image_link>\n`;
    xml += `      <g:availability>${product.availability}</g:availability>\n`;
    if (product.category) xml += `      <g:product_type>${escapeXml(product.category)}</g:product_type>\n`;
    if (product.brand) xml += `      <g:brand>${escapeXml(product.brand)}</g:brand>\n`;
    if (product.gtin) xml += `      <g:gtin>${escapeXml(product.gtin)}</g:gtin>\n`;
    if (product.mpn) xml += `      <g:mpn>${escapeXml(product.mpn)}</g:mpn>\n`;
    xml += '    </item>\n';
  });
  
  xml += '  </channel>\n';
  xml += '</rss>';
  
  res.send(xml);
});

// Flux CSV pour Google Merchant (alternative)
app.get('/feed/google-merchant.csv', (req, res) => {
  const products = loadProducts();
  res.type('text/csv');
  res.attachment('google-merchant.csv');
  
  let csv = 'id,title,description,price,currency,image_url,availability,category,brand,gtin,mpn\n';
  
  products.forEach(product => {
    csv += `"${product.id}","${product.title}","${product.description}",${product.price},"${product.currency}","${product.image_url}","${product.availability}","${product.category}","${product.brand}","${product.gtin}","${product.mpn}"\n`;
  });
  
  res.send(csv);
});

// Fonction pour échapper les caractères XML
function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, function(c) {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

// Charger les produits de test au démarrage
app.listen(PORT, () => {
  ensureDataDir();
  const products = loadProducts();
  
  if (products.length === 0) {
    // Ajouter des produits de test
    const testProducts = [
      {
        id: '1',
        title: 'Laptop Premium',
        description: 'Ordinateur portable haute performance avec écran 4K',
        price: 1299.99,
        currency: 'EUR',
        image_url: 'https://via.placeholder.com/300?text=Laptop',
        category: 'Électronique > Ordinateurs',
        availability: 'in_stock',
        brand: 'TechBrand',
        gtin: '5901234123457',
        mpn: 'TB-LAPTOP-2024'
      },
      {
        id: '2',
        title: 'Casque Bluetooth',
        description: 'Casque sans fil avec réduction de bruit active',
        price: 149.99,
        currency: 'EUR',
        image_url: 'https://via.placeholder.com/300?text=Headphones',
        category: 'Électronique > Audio',
        availability: 'in_stock',
        brand: 'AudioPro',
        gtin: '5901234123458',
        mpn: 'AP-HEADSET-2024'
      },
      {
        id: '3',
        title: 'Souris Ergonomique',
        description: 'Souris ergonomique pour une meilleure productivité',
        price: 39.99,
        currency: 'EUR',
        image_url: 'https://via.placeholder.com/300?text=Mouse',
        category: 'Électronique > Accessoires',
        availability: 'in_stock',
        brand: 'TechBrand',
        gtin: '5901234123459',
        mpn: 'TB-MOUSE-2024'
      }
    ];
    saveProducts(testProducts);
  }

  console.log(`\n✅ Serveur lancé sur http://localhost:${PORT}`);
  console.log(`📱 Boutique: http://localhost:${PORT}`);
  console.log(`⚙️  Admin: http://localhost:${PORT}/admin`);
  console.log(`🔗 Flux Google Merchant XML: http://localhost:${PORT}/feed/google-merchant.xml`);
  console.log(`📊 Flux Google Merchant CSV: http://localhost:${PORT}/feed/google-merchant.csv\n`);
});

module.exports = app;

