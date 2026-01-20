# 📋 Plan d'action complet - Elinor Shop

## Phase 1: Préparation locale ✓ (Complétée)

- [x] Créer la structure du projet
- [x] Développer le serveur Express
- [x] Créer l'interface boutique
- [x] Créer l'interface admin
- [x] Implémenter les flux Google Merchant (XML & CSV)
- [x] Initialiser Git repository
- [x] Créer documentation

## Phase 2: Configuration locale (À faire)

- [ ] **Installer Node.js** depuis https://nodejs.org
- [ ] Ouvrir PowerShell dans le dossier du projet
- [ ] Exécuter: `npm install`
- [ ] Exécuter: `npm start`
- [ ] Tester: http://localhost:3000

### Commandes pour Phase 2:

```powershell
# Se placer dans le dossier
cd C:\Users\AD\Documents\Elinor

# Installer les dépendances
npm install

# Lancer le serveur
npm start
```

---

## Phase 3: Test local (À faire)

- [ ] Accéder à http://localhost:3000
- [ ] Vérifier la boutique s'affiche correctement
- [ ] Aller à http://localhost:3000/admin
- [ ] Ajouter 5-10 produits de test
- [ ] Vérifier les produits s'affichent dans la boutique
- [ ] Consulter http://localhost:3000/feed/google-merchant.xml
- [ ] Vérifier le flux XML est bien formé
- [ ] Consulter http://localhost:3000/feed/google-merchant.csv
- [ ] Vérifier le flux CSV est bien formé

---

## Phase 4: Préparation GitHub (À faire)

- [ ] Créer un compte sur https://github.com (si pas déjà fait)
- [ ] Créer un nouveau repository nommé "elinor-merchant"
- [ ] Noter votre nom d'utilisateur GitHub
- [ ] Copier l'URL HTTPS du repo

### Commandes pour Phase 4:

```powershell
# Configurer Git (une seule fois)
git config --global user.name "Votre Nom"
git config --global user.email "votre.email@gmail.com"

# Ajouter le remote GitHub
git remote add origin https://github.com/VOTRE_USERNAME/elinor-merchant.git

# Changer la branche principale
git branch -M main

# Pousser le code
git push -u origin main
```

---

## Phase 5: Déploiement cloud (À faire)

### Choix A: Render.com (⭐ Recommandé)

- [ ] Aller sur https://render.com
- [ ] Créer un compte et se connecter avec GitHub
- [ ] Cliquer "New Web Service"
- [ ] Sélectionner le repo "elinor-merchant"
- [ ] Configurer:
  - Name: `elinor-merchant`
  - Build Command: `npm install`
  - Start Command: `npm start`
- [ ] Cliquer "Create Web Service"
- [ ] Attendre le déploiement (2-3 min)
- [ ] Tester votre site en ligne

**Votre URL sera**: `https://elinor-merchant.onrender.com`

### Choix B: Railway.app (Plus simple)

- [ ] Aller sur https://railway.app
- [ ] Se connecter avec GitHub
- [ ] Cliquer "New Project"
- [ ] Sélectionner "Deploy from GitHub repo"
- [ ] Choisir "elinor-merchant"
- [ ] Attendre le déploiement
- [ ] Copier votre URL

**Votre URL sera**: `https://elinor-merchant.up.railway.app`

---

## Phase 6: Google Merchant Center (À faire)

- [ ] Créer un compte Google Merchant Center
- [ ] Accéder à https://merchantcenter.google.com
- [ ] Aller à Produits → Flux
- [ ] Cliquer "Créer un flux"
- [ ] Sélectionner:
  - Type: "Données de flux primaire"
  - Méthode: "Récupérer à partir d'une URL"
- [ ] Entrer votre URL de flux:
  - `https://elinor-merchant.onrender.com/feed/google-merchant.xml`
  - (ou votre URL Railway/Vercel)
- [ ] Cliquer "Créer le flux"
- [ ] Cliquer "Récupérer maintenant"
- [ ] Vérifier les produits sont importés
- [ ] Attendre validation (24-72h)

---

## 📝 Notes importantes

### Avant de déployer:
1. Testez TOUJOURS localement d'abord
2. Vérifiez que les produits s'affichent correctement
3. Assurez-vous que le flux XML est valide
4. Notez les URLs de vos ressources cloud

### URLs à noter:
- [ ] Site en ligne: ________________
- [ ] Flux XML: ________________/feed/google-merchant.xml
- [ ] Admin: ________________/admin
- [ ] Repo GitHub: https://github.com/___/elinor-merchant

### Variables d'environnement (si besoin):
- PORT: Port d'écoute (défaut: 3000)
- NODE_ENV: "production" ou "development"

---

## 🆘 Troubleshooting rapide

| Problème | Solution |
|----------|----------|
| npm: term is not recognized | Installer Node.js et redémarrer |
| Port 3000 already in use | Changer de port: `npm start -- --port 3001` |
| Fichiers .git non synchronisés | Faire `git status` et `git push` |
| Produits ne s'affichent pas | Vérifier qu'au moins 1 produit est dans l'admin |
| Flux XML vide | Ajouter des produits via l'admin et rafraîchir |

---

## ✅ Checklist finale

**À la fin:**
- [ ] Site local fonctionne ✓
- [ ] Site cloud en ligne ✓
- [ ] Flux Google Merchant XML valide ✓
- [ ] Produits visibles dans Google Merchant Center ✓
- [ ] Admin fonctionnel ✓

---

**Vous êtes prêt à lancer votre site de test!** 🚀

