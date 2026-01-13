window.onload = function() {
    let count = 0;
    let counterText = document.getElementById("count");
    let bar = document.getElementById("progress-bar");
    let loader = document.getElementById("benx-loader");
    let mainUI = document.getElementById("main-ui");

    let loadInterval = setInterval(() => {
        count++;
        if (counterText) counterText.innerHTML = count;
        let offset = 440 - (440 * count) / 100;
        if (bar) bar.style.strokeDashoffset = offset;

        if(count >= 100) {
            clearInterval(loadInterval);
            setTimeout(() => {
                loader.style.display = "none";
                mainUI.style.display = "block";
                
                // SPEC BOT DATA
                document.getElementById('os-info').innerText = navigator.platform;
                document.getElementById('cpu-info').innerText = navigator.vendor.split(' ')[0] || "HARDWARE";
                document.getElementById('core-info').innerText = (navigator.hardwareConcurrency || "X") + " CORES";

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
            }, 400);
        }
    }, 25);
};
