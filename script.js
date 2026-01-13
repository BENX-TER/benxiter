window.onload = function() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 80 },
                "color": { "value": "#ff0000" },
                "shape": { "type": "edge" },
                "opacity": { "value": 0.5 },
                "size": { "value": 2 },
                "line_linked": { "enable": true, "distance": 150, "color": "#ff0000", "opacity": 0.2, "width": 1 },
                "move": { "enable": true, "speed": 3 }
            }
        });
    }
    console.log("BENX CORE INITIALIZED");
};
