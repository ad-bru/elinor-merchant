#!/bin/bash
# Script de déploiement et configuration pour Render/Railway

# Vérifier que Node.js est installé
if ! command -v node &> /dev/null; then
    echo "⚠️  Node.js n'est pas installé"
    exit 1
fi

echo "✅ Node.js détecté: $(node --version)"
echo "✅ npm détecté: $(npm --version)"

# Installer les dépendances
echo "📦 Installation des dépendances..."
npm install

# Afficher les informations du projet
echo ""
echo "================================"
echo "🎉 Elinor Shop - Prêt au lancement!"
echo "================================"
echo ""
echo "📱 Localhost:"
echo "   - Boutique: http://localhost:3000"
echo "   - Admin: http://localhost:3000/admin"
echo "   - Flux XML: http://localhost:3000/feed/google-merchant.xml"
echo "   - Flux CSV: http://localhost:3000/feed/google-merchant.csv"
echo ""
echo "🚀 Pour démarrer: npm start"
echo ""

