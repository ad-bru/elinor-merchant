# Elinor Shop - Site de Test Google Merchant

Un site web de e-commerce simple et complet pour tester **Google Merchant Center** avec hébergement gratuit.

## 🚀 Démarrage Rapide

### 1. Installation des dépendances

```bash
npm install
```

### 2. Lancer le serveur

```bash
npm start
```

Le serveur démarre sur `http://localhost:3000`

### 3. Accéder aux interfaces

- **Boutique**: http://localhost:3000
- **Admin**: http://localhost:3000/admin
- **Flux Google Merchant (XML)**: http://localhost:3000/feed/google-merchant.xml
- **Flux Google Merchant (CSV)**: http://localhost:3000/feed/google-merchant.csv

## ✨ Fonctionnalités

### 🛍️ Boutique
- Affichage élégant des produits
- Images produits
- Informations complètes (prix, description, catégorie, etc.)
- Design responsive et moderne

### ⚙️ Admin
- Ajouter de nouveaux produits
- Supprimer des produits
- Interface facile à utiliser
- Gestion complète du catalogue

### 📦 Exports Google Merchant
- **Format XML**: Compatible avec Google Merchant Center
- **Format CSV**: Peut être importé dans Google Sheets ou Merchant
- Mise à jour automatique lors de chaque modification

## 🔧 Structure du Projet

```
elinor/
├── server.js           # Serveur Express principal
├── package.json        # Dépendances Node.js
├── views/
│   ├── index.ejs      # Page d'accueil (boutique)
│   └── admin.ejs      # Page d'administration
├── data/
│   └── products.json  # Base de données des produits
└── README.md          # Ce fichier
```

## 🌍 Hébergement Gratuit

### Option 1: Render (Recommandé - 750h/mois gratuit)

1. Créez un compte sur [render.com](https://render.com)
2. Connectez votre repo GitHub
3. Créez un nouveau "Web Service"
4. Configurez:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Votre site sera en ligne automatiquement

### Option 2: Railway (Gratuit avec limite)

1. Créez un compte sur [railway.app](https://railway.app)
2. Connectez GitHub
3. Créez un projet et configurez le déploiement
4. Railway détecte automatiquement Node.js

### Option 3: Vercel (Compatible Node.js)

1. Allez sur [vercel.com](https://vercel.com)
2. Importez votre repo
3. Configurez les variables d'environnement si nécessaire
4. Déployer

### Option 4: Railway.app (Plus simple)

Pour Railway, c'est aussi simple que:
- Connecter GitHub
- Sélectionner le repo
- Cliquer "Deploy"

## 📊 Champs Produits Supportés

Chaque produit peut contenir:

- **title**: Nom du produit (requis)
- **description**: Description longue (requis)
- **price**: Prix numérique (requis)
- **currency**: Devise (EUR, USD, GBP)
- **image_url**: URL de l'image (HTTPS)
- **category**: Catégorie du produit
- **brand**: Marque
- **availability**: En stock, Rupture, Précommande
- **gtin**: Code-barres (GTIN-13, UPC, etc.)
- **mpn**: Numéro de pièce du fabricant

## 🔗 Ajouter le Flux à Google Merchant

1. Allez sur [Google Merchant Center](https://merchantcenter.google.com)
2. Allez dans **Produits > Flux**
3. Créez un nouveau flux
4. Sélectionnez "Récupérer à partir d'une URL"
5. Entrez: `https://votre-domaine.com/feed/google-merchant.xml`
6. Cliquez "Fetch now"

## 📝 API REST

### GET /api/products
Récupère tous les produits en JSON

### POST /api/products
Ajoute un produit
```json
{
  "title": "Produit",
  "description": "Description",
  "price": 29.99,
  "currency": "EUR",
  "image_url": "https://...",
  "category": "Catégorie",
  "brand": "Marque",
  "availability": "in_stock",
  "gtin": "123456789",
  "mpn": "ABC123"
}
```

### DELETE /api/products/:id
Supprime un produit

### PUT /api/products/:id
Met à jour un produit

## 🎨 Personnalisation

### Modifier les produits par défaut
Éditer les produits de test dans `server.js` (ligne ~140)

### Changer les couleurs
Éditer les variables CSS dans `views/index.ejs` et `views/admin.ejs`:
- `#667eea`: Couleur primaire
- `#764ba2`: Couleur secondaire

## 🐛 Troubleshooting

**Port déjà utilisé?**
```bash
npm start -- --port 3001
```

**Produits ne s'enregistrent pas?**
Vérifiez que le dossier `data/` existe et est accessible en écriture

**Flux XML vide?**
Assurez-vous que des produits ont été ajoutés via l'admin

## 📄 Licence

MIT

---

**Créé pour tester Google Merchant Center** ✨

