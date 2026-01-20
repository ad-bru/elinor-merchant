# Guide d'Installation et Déploiement - Elinor Shop

## 🖥️ Installation Locale (Windows)

### Étape 1: Installer Node.js

1. Téléchargez Node.js depuis: https://nodejs.org (LTS - version stable)
2. Exécutez l'installateur et suivez les instructions
3. Acceptez tous les paramètres par défaut
4. Redémarrez votre ordinateur

### Étape 2: Vérifier l'installation

Ouvrez PowerShell ou Command Prompt et tapez:

```powershell
node --version
npm --version
```

Vous devriez voir deux numéros de version.

### Étape 3: Installer les dépendances du projet

```powershell
cd C:\Users\AD\Documents\Elinor
npm install
```

Cela créera un dossier `node_modules/` et téléchargera tous les packages.

### Étape 4: Lancer le serveur

```powershell
npm start
```

Vous devriez voir:
```
✅ Serveur lancé sur http://localhost:3000
📱 Boutique: http://localhost:3000
⚙️  Admin: http://localhost:3000/admin
```

### Étape 5: Tester la boutique

Ouvrez votre navigateur et allez à: **http://localhost:3000**

---

## ☁️ Déploiement sur le Cloud Gratuit

### Option A: Render.com (Recommandé)

1. **Créer un compte GitHub** (si vous n'en avez pas):
   - Allez sur https://github.com/signup
   - Créez un compte avec votre email

2. **Créer un repository GitHub**:
   - Allez sur https://github.com/new
   - Nom du repo: `elinor-merchant`
   - Description: "Site de test Google Merchant"
   - Cliquez "Create repository"

3. **Pousser le code vers GitHub**:

```powershell
cd C:\Users\AD\Documents\Elinor

git config --global user.name "Votre Nom"
git config --global user.email "votre.email@example.com"

git remote add origin https://github.com/VOTRE_USERNAME/elinor-merchant.git
git branch -M main
git push -u origin main
```

(Remplacez `VOTRE_USERNAME` par votre nom d'utilisateur GitHub)

4. **Déployer sur Render**:
   - Allez sur https://render.com/dashboard
   - Connectez-vous avec GitHub
   - Cliquez "New +" → "Web Service"
   - Sélectionnez votre repo `elinor-merchant`
   - Configurez:
     - **Name**: elinor-merchant
     - **Environment**: Node
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`
   - Cliquez "Create Web Service"

5. **Attendez le déploiement** (2-3 minutes)

Votre site sera accessible à: `https://elinor-merchant.onrender.com`

---

### Option B: Railway.app (Plus simple)

1. Allez sur https://railway.app/dashboard
2. Cliquez "New Project"
3. Sélectionnez "Deploy from GitHub repo"
4. Autorisez Railway à accéder à GitHub
5. Sélectionnez votre repo `elinor-merchant`
6. Railway détecte automatiquement Node.js
7. Attendez le déploiement

Votre site sera à: `https://elinor-merchant.up.railway.app`

---

### Option C: Vercel

1. Allez sur https://vercel.com/import
2. Connectez-vous avec GitHub
3. Sélectionnez votre repo
4. Cliquez "Import"
5. Vercel configure automatiquement

Votre site sera à: `https://elinor-merchant.vercel.app`

---

## 📊 Ajouter le Flux à Google Merchant Center

Une fois votre site en ligne:

1. Allez sur https://merchantcenter.google.com
2. Connectez-vous avec votre compte Google
3. Allez dans: **Produits** → **Flux**
4. Cliquez **"Créer un flux"**
5. Sélectionnez:
   - Type: "Données de flux primaire"
   - Méthode: "Récupérer un flux à partir d'une URL"
6. Entrez votre URL:
   - **Pour Render**: `https://elinor-merchant.onrender.com/feed/google-merchant.xml`
   - **Pour Railway**: `https://elinor-merchant.up.railway.app/feed/google-merchant.xml`
   - **Pour Vercel**: `https://elinor-merchant.vercel.app/feed/google-merchant.xml`
7. Cliquez **"Créer le flux"**
8. Cliquez **"Récupérer maintenant"** pour tester

---

## 🔄 Mise à jour du site après déploiement

### Après avoir fait des modifications:

```powershell
# 1. Allez au dossier du projet
cd C:\Users\AD\Documents\Elinor

# 2. Testez localement
npm start

# 3. Si tout est OK, committez et poussez
git add .
git commit -m "Description de vos changements"
git push origin main
```

Le site se redéploiera automatiquement dans 1-2 minutes!

---

## ✅ Checklist

### ✓ Installation locale:
- [ ] Node.js installé
- [ ] `npm install` exécuté
- [ ] `npm start` fonctionne
- [ ] Site accessible à http://localhost:3000

### ✓ Préparation GitHub:
- [ ] Compte GitHub créé
- [ ] Repo créé
- [ ] Code poussé sur GitHub

### ✓ Déploiement cloud:
- [ ] Compte Render/Railway/Vercel créé
- [ ] Repo GitHub connecté
- [ ] Site déployé et accessible
- [ ] URL notée

### ✓ Google Merchant Center:
- [ ] Flux ajouté
- [ ] Produits visibles dans Google Merchant

---

## 🆘 En cas de problème

### "npm: term is not recognized"
→ Node.js n'est pas installé ou pas dans le PATH. Réinstallez Node.js

### "Port 3000 already in use"
→ Un autre processus utilise le port. Utilisez: `npm start -- --port 3001`

### "Produits ne s'affichent pas dans Merchant"
→ Vérifiez que le flux XML est valide: `https://votre-site.com/feed/google-merchant.xml`

### "Erreur lors du push GitHub"
→ Vérifiez vos identifiants: `git config --global user.name` et `git config --global user.email`

---

## 📞 Ressources Utiles

- [Node.js Documentation](https://nodejs.org/docs/)
- [Express Documentation](https://expressjs.com/)
- [GitHub Docs](https://docs.github.com)
- [Render Documentation](https://render.com/docs)
- [Google Merchant Center Help](https://support.google.com/merchants)

---

Vous êtes prêt à lancer! 🚀

