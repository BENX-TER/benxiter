window.onload = function() {
    let count = 0;
    let counter = document.getElementById("count");
    let progBar = document.getElementById("progress-bar");
    let loader = document.getElementById("benx-loader");
    let mainUI = document.getElementById("main-ui");

    let id = setInterval(() => {
        count++;
        if (counter) counter.innerHTML = count;
        
        // Circle math: 440 is the circumference
        let offset = 440 - (440 * count) / 100;
        if (progBar) progBar.style.strokeDashoffset = offset;

        if(count >= 100) {
            clearInterval(id);
            setTimeout(() => {
                loader.style.display = "none";
                mainUI.style.display = "block";
                // Start Particles after loader finishes
                if (window.particlesJS) {
                    particlesJS("particles-js", {
                        "particles": {
                            "number": { "value": 80 },
                            "color": { "value": "#ff0000" },
                            "shape": { "type": "edge" },
                            "opacity": { "value": 0.5 },
                            "size": { "value": 2 },
                            "line_linked": { "enable": true, "distance": 150, "color": "#ff0000", "opacity": 0.2, "width": 1 },
                            "move": { "enable": true, "speed": 2 }
                        }
                    });
                }
            }, 500);
        }
    }, 30);
};
