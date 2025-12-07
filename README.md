# TP CI/CD - Le Restaurant 👨‍🍳

## Objectif du TP

Apprendre à mettre en place un pipeline CI/CD (Intégration Continue / Déploiement Continu) avec GitHub Actions à travers une série d'exercices sur le thème d'un restaurant.

---

## Prérequis à installer

### 1. Node.js (version 20 LTS)

**Sur Mac :**
```bash
brew install node@20
```

**Ou avec nvm (recommandé) :**
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 20
nvm use 20
```

**Vérification :**
```bash
node -v
# Doit afficher v20.x.x
```

### 2. Git

**Sur Mac :**
```bash
brew install git
```

**Vérification :**
```bash
git -v
# Doit afficher git version x.x.x
```

### 3. Compte GitHub

Créer un compte sur [github.com](https://github.com) si ce n'est pas déjà fait.

---

## Initialisation du projet

```bash
mkdir restaurant-votrenom
cd restaurant-votrenom
npm init -y
npm install --save-dev jest eslint @eslint/js globals
```

**Modifier le `package.json` :**
```json
"scripts": {
  "test": "jest",
  "lint": "eslint ."
}
```

---

## Structure des fichiers

```
restaurant-votrenom/
├── .github/
│   └── workflows/
│       ├── exo1.yml
│       ├── exo2.yml
│       ├── exo3.yml
│       ├── exo4.yml
│       ├── exo5.yml
│       ├── exo6.yml
│       └── exo7.yml
├── addition.js
├── addition.test.js
├── eslint.config.mjs
├── package.json
└── package-lock.json
```

---

## Liste des exercices

| Exercice | Objectif | Difficulté |
|----------|----------|------------|
| 1 | Créer son premier workflow (echo) | ⭐ |
| 2 | Mettre en place des tests automatiques | ⭐⭐ |
| 3 | Observer un échec du CI | ⭐ |
| 4 | Ajouter du linting (qualité de code) | ⭐⭐ |
| 5 | Tester sur plusieurs versions (matrice) | ⭐⭐⭐ |
| 6 | Protéger la branche principale | ⭐⭐ |
| 7 | Ajouter une nouvelle fonctionnalité (bonus) | ⭐⭐ |

---

## Vocabulaire du restaurant

| Terme restaurant | Terme technique |
|------------------|-----------------|
| Restaurant | Dépôt GitHub |
| Service | Push |
| Addition | Fonction de calcul |
| Carte du menu | Code source |
| Inspecteur Michelin | ESLint |
| Caisse enregistreuse | Version Node.js |
| Caisse principale | Branche main |
| Encaisser | Merge |
| Franchise | Job parallèle |

---

## Commandes utiles

| Commande | Description |
|----------|-------------|
| `npm test` | Lancer les tests |
| `npm run lint` | Vérifier la qualité du code |
| `git add .` | Ajouter les fichiers modifiés |
| `git commit -m "message"` | Créer un commit |
| `git push` | Envoyer sur GitHub |

---

## Ressources

- [Documentation GitHub Actions](https://docs.github.com/en/actions)
- [Documentation Jest](https://jestjs.io/docs/getting-started)
- [Documentation ESLint](https://eslint.org/docs/latest/)

---

Bon service, Chef ! 👨‍🍳🧾