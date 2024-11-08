const swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,           // Nombre de slides visibles en même temps
  spaceBetween: 20,           // Espace entre chaque slide
  slidesPerGroup: 2,          // Nombre de slides défilés en même temps
  centeredSlides: true,       // Centre le slide actif
  direction: 'horizontal',    // Direction de défilement : 'horizontal' ou 'vertical'
  loop: true,                 // Active le défilement infini
  initialSlide: 0,            // Slide de départ au chargement
  grid: {                     // Organisation en grille
    rows: 2,
  },

  // Navigation
  pagination: {
    el: '.swiper-pagination', // Sélecteur pour les points de pagination
    clickable: true           // Pagination cliquable
  },
  navigation: {
    nextEl: '.swiper-button-next', // Bouton "Suivant"
    prevEl: '.swiper-button-prev'  // Bouton "Précédent"
  },
  keyboard: {                 // Navigation au clavier
    enabled: true,
    onlyInViewport: true
  },
  mousewheel: {               // Navigation avec la molette de la souris
    invert: false
  },

  // Défilement et Interactions
  autoplay: {
    delay: 3000,              // Délai pour le défilement automatique
    disableOnInteraction: false
  },
  speed: 500,                 // Vitesse de transition
  freeMode: true,             // Mode libre pour le défilement
  touchRatio: 1.5,            // Sensibilité du glissement
  touchAngle: 45,             // Angle minimum pour détecter un glissement
  grabCursor: true,           // Curseur de type main pour simuler le glissement

  // Effets de Transition
  effect: 'coverflow',        // Effet de transition (ex : 'fade', 'cube', 'coverflow', 'flip')
  fadeEffect: {               // Paramètres pour l'effet 'fade'
    crossFade: true
  },
  coverflowEffect: {          // Paramètres pour l'effet 'coverflow'
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  },
  flipEffect: {               // Paramètres pour l'effet 'flip'
    slideShadows: true,
    limitRotation: true
  },

  // Responsive et Breakpoints
  breakpoints: {              // Options spécifiques pour différentes tailles d'écran
    640: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  },

  // Optimisation des Performances
  lazy: {
    loadPrevNext: true        // Chargement des images des slides visibles seulement
  },
  observer: true,             // Réagit aux changements dans le DOM
  watchOverflow: true,        // Désactive Swiper si le nombre de slides est insuffisant

  // Zoom et Effets Visuels
  zoom: {
    maxRatio: 2               // Niveau de zoom maximum
  }
});
