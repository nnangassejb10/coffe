

## ☕ Velora Coffee — Site 3D Immersif Complet

### Vue d'ensemble
Un site web de coffee shop haut de gamme avec une esthétique dark/green inspirée des images, utilisant **React Three Fiber** pour des scènes 3D complètes et immersives.

### Design
- **Palette** : Fond vert foncé (#0a3d2a), accents vert lime (#7ed957), texte blanc/crème
- **Style** : Premium, moderne, immersif avec grains de café flottants en 3D
- **Typographie** : Titres en gras/majuscules, corps en sans-serif élégant

### Pages & Fonctionnalités

**1. Accueil (Hero 3D)**
- Scène Three.js avec grains de café 3D animés flottant dans l'espace
- Titre "VELORA COFFEE" avec effet de profondeur
- Tasse de café 3D rotative au centre
- Scroll-triggered animations qui transitionnent vers les sections

**2. Menu / Signature Creations**
- Grille de cards avec les boissons signatures (Iced Latte, Caramel Frappe, Mocha Swirl, Vanilla Cold Brew)
- Cards avec effet hover 3D (tilt/rotation)
- Boutons "Try This" avec animation
- Images des boissons avec effet parallax

**3. À propos**
- Histoire du café avec scène 3D de fond (plantation, grains)
- Animations au scroll

**4. Récompenses / Fidélité**
- Programme de fidélité avec compteur de points animé
- Cards 3D pour les niveaux de récompenses

**5. Localisations**
- Liste des emplacements avec cartes interactives
- Cards d'adresses avec animations

**6. Contact**
- Formulaire de contact stylisé
- Infos de contact avec icônes animées

### Navigation
- Barre de navigation fixe semi-transparente : "VELORA COFFEE" à gauche, liens Home/Menu/Rewards/Locations/Contact à droite
- Menu hamburger responsive sur mobile

### Technique
- **@react-three/fiber@^8.18** + **@react-three/drei@^9.122.0** + **three@^0.133** pour les scènes 3D
- Géométries primitives (sphères, cylindres, torus) pour créer les objets 3D (grains, tasses) sans modèles externes
- Framer Motion pour les animations UI
- Fully responsive

