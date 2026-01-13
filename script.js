function initParticles() {
    if (window.particlesJS) {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 60 },
                "color": { "value": "#ff0000" },
                "shape": { "type": "edge" },
                "opacity": { "value": 0.4 },
                "size": { "value": 2 },
                "line_linked": { "enable": true, "distance": 150, "color": "#ff0000", "opacity": 0.2, "width": 1 },
                "move": { "enable": true, "speed": 2 }
            },
            "retina_detect": true
        });
        console.log("BENX Particles Active");
    }
}

// Try to init every 500ms until library is ready
let checkLoad = setInterval(() => {
    if (window.particlesJS) {
        initParticles();
        clearInterval(checkLoad);
    }
}, 500);
