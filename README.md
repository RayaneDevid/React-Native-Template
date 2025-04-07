# React Native Template

Ce template est conçu pour servir de point de départ à n'importe quel projet React Native. Il inclut une structure de base avec les fonctionnalités essentielles suivantes :

## Fonctionnalités incluses

- Navigation avec React Navigation
- Gestion d'état avec Zustand
- Internationalisation avec i18next
- Structure de dossiers modulaire
- Configuration TypeScript
- Support Expo

## Structure des dossiers

```
src/
├── components/     # Composants réutilisables
├── screens/        # Écrans de l'application
├── navigation/     # Configuration de la navigation
├── store/         # État global (Zustand)
├── i18n/          # Fichiers de traduction
├── types/         # Types TypeScript
└── utils/         # Fonctions utilitaires
```

## Installation

1. Clonez ce repository
2. Installez les dépendances :
```bash
npm install
```
3. Lancez l'application :
```bash
npm start
```

## Personnalisation

1. Renommez le projet dans `package.json`
2. Mettez à jour les métadonnées dans `app.json`
3. Ajoutez vos propres écrans dans `src/screens`
4. Configurez vos routes dans `src/navigation`
5. Ajoutez vos traductions dans `src/i18n`

## Dépendances principales

- React Native
- Expo
- React Navigation
- Zustand
- i18next
- TypeScript

## Licence

MIT 