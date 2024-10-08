/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */
// Define particles configurations for light and dark themes
const lightThemeParticles = {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#000000" // Black particles for light theme
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
    },
    "opacity": {
      "value": 0.5,
      "random": false,
    },
    "size": {
      "value": 5,
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#000000", // Black lines for light theme
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
    }
  },
  "retina_detect": true
};

const darkThemeParticles = {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": ["#00ccff", "#d400d4"] // Gradient particles for dark theme
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false
    },
    "size": {
      "value": 5,
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#00ccff", // Color lines for dark theme
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      }
    }
  },
  "retina_detect": true
};

// Initialize with light theme by default
particlesJS('particles-js', lightThemeParticles);

// Track the current theme state
let isLightTheme = true;

// Function to reload particles with the desired theme
function reloadParticles() {
  // Destroy the existing particles instance
  if (window.pJSDom && window.pJSDom.length > 0) {
    window.pJSDom[0].pJS.fn.vendors.destroypJS();
    window.pJSDom = [];
  }
  
  // Load particles based on the current theme
  if (isLightTheme) {
    particlesJS('particles-js', lightThemeParticles);
  } else {
    particlesJS('particles-js', darkThemeParticles);
  }
}

// Toggle theme on button click
document.getElementById('icon').addEventListener('click', function() {
  isLightTheme = !isLightTheme; // Toggle theme state
  reloadParticles();            // Reload particles with the new theme
});
