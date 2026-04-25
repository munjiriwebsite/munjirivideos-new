import './style.css'
import './nav.js'
import './youtube.js'

// Create dataLayer FIRST
window.dataLayer = window.dataLayer || [];
window.gtag = function(){ window.dataLayer.push(arguments); };

// Load gtag script (NO inline HTML anymore)
const script = document.createElement("script");
script.async = true;
script.src = "https://www.googletagmanager.com/gtag/js?id=UA-57585637-2";
document.head.appendChild(script);

// Initialise AFTER defining gtag
window.gtag('js', new Date());
window.gtag('config', 'UA-57585637-2');