document.addEventListener("DOMContentLoaded", function() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#ff0000" },
                "shape": { "type": "edge" },
                "opacity": { "value": 0.5, "random": true },
                "size": { "value": 2, "random": true },
                "line_linked": { "enable": true, "distance": 140, "color": "#ff0000", "opacity": 0.2, "width": 1 },
                "move": { "enable": true, "speed": 4, "direction": "none", "random": true, "out_mode": "out" }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": { "onhover": { "enable": true, "mode": "repulse" } }
            },
            "retina_detect": true
        });
        console.log("BENX!TER CORE: LOADED");
    } else {
        console.warn("Retrying particles load...");
    }
});
