@echo off
REM Script de configuration pour Windows

echo.
echo ================================
echo  Elinor Shop - Configuration
echo ================================
echo.

REM Vérifier Node.js
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js n'est pas installé!
    echo Téléchargez depuis: https://nodejs.org
    pause
    exit /b 1
)

echo ✅ Node.js détecté
node --version
echo.

REM Vérifier npm
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm n'est pas disponible!
    pause
    exit /b 1
)

echo ✅ npm détecté
npm --version
echo.

REM Installer les dépendances
echo 📦 Installation des dépendances...
echo Cela peut prendre quelques minutes...
echo.

npm install

if %errorlevel% neq 0 (
    echo ❌ Erreur lors de l'installation!
    pause
    exit /b 1
)

echo.
echo ================================
echo 🎉 Configuration terminée!
echo ================================
echo.
echo Pour démarrer le serveur, exécutez:
echo   npm start
echo.
echo URLs disponibles:
echo   - Boutique: http://localhost:3000
echo   - Admin: http://localhost:3000/admin
echo   - Flux XML: http://localhost:3000/feed/google-merchant.xml
echo   - Flux CSV: http://localhost:3000/feed/google-merchant.csv
echo.
pause

