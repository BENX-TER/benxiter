window.onload = function() {
    if (document.getElementById('particles-js')) {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 100, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#ff0000" },
                "shape": { "type": "edge" }, // Square particles for brutal look
                "opacity": { "value": 0.5, "random": true },
                "size": { "value": 2, "random": true },
                "line_linked": { "enable": true, "distance": 150, "color": "#ff0000", "opacity": 0.2, "width": 1 },
                "move": { "enable": true, "speed": 3, "direction": "none", "random": true, "out_mode": "out" }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": { "onhover": { "enable": true, "mode": "repulse" } }
            },
            "retina_detect": true
        });
        console.log("Terminal Particles: Initialized");
    } else {
        console.error("Error: particles-js container not found.");
    }
};
