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
                
                // ADVANCED SCANNER LOGIC
                document.getElementById('os-info').innerText = navigator.platform.toUpperCase();
                document.getElementById('vendor-info').innerText = navigator.vendor.split(' ')[0] || "PC USER";
                document.getElementById('core-info').innerText = (navigator.hardwareConcurrency || "X") + " THREADS";
                document.getElementById('ram-info').innerText = (navigator.deviceMemory || "8") + " GB";
                
                // CPU & GPU DETECTION
                let canvas = document.createElement("canvas");
                let gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
                if (gl) {
                    let debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
                    let renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
                    document.getElementById('gpu-info').innerText = renderer.split(' ').pop();
                    document.getElementById('cpu-info').innerText = renderer.split(' ')[1] || "GENERIC";
                }

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
