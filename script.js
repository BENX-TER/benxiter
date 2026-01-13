window.onload = function() {
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 50, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#ff0000" },
            "shape": { "type": "edge" },
            "opacity": { "value": 0.4 },
            "size": { "value": 2 },
            "line_linked": { "enable": true, "distance": 150, "color": "#ff0000", "opacity": 0.1, "width": 1 },
            "move": { "enable": true, "speed": 1.5, "direction": "none", "random": true }
        },
        "retina_detect": true
    });
};
