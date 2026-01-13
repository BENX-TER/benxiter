document.addEventListener("DOMContentLoaded", function() {
    function startParticles() {
        if (window.particlesJS) {
            particlesJS("particles-js", {
                "particles": {
                    "number": { "value": 50, "density": { "enable": true, "value_area": 800 } },
                    "color": { "value": "#ff0000" },
                    "shape": { "type": "edge" },
                    "opacity": { "value": 0.3 },
                    "size": { "value": 2 },
                    "line_linked": { "enable": true, "distance": 150, "color": "#ff0000", "opacity": 0.1, "width": 1 },
                    "move": { "enable": true, "speed": 2 }
                },
                "retina_detect": true
            });
            console.log("BENX_SYSTEM: Particles Online");
        }
    }

    // Delay start slightly to ensure library is parsed
    setTimeout(startParticles, 300);
});
