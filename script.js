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
                
                // DATA SCANNER
                try {
                    document.getElementById('os-info').innerText = navigator.platform.toUpperCase();
                    document.getElementById('vendor-info').innerText = navigator.vendor.split(' ')[0] || "USER";
                    document.getElementById('core-info').innerText = navigator.hardwareConcurrency + " THREADS";
                    document.getElementById('ram-info').innerText = (navigator.deviceMemory || "8") + " GB";
                    
                    let canvas = document.createElement("canvas");
                    let gl = canvas.getContext("webgl");
                    if (gl) {
                        let debug = gl.getExtension("WEBGL_debug_renderer_info");
                        let renderer = gl.getParameter(debug.UNMASKED_RENDERER_WEBGL);
                        document.getElementById('gpu-info').innerText = renderer.split(' ').pop();
                        document.getElementById('cpu-info').innerText = "DETECTED";
                    }
                } catch(e) { console.log("Scanner Error"); }

                particlesJS("particles-js", {
                    "particles": {
                        "number": { "value": 70 },
                        "color": { "value": "#ff0000" },
                        "shape": { "type": "edge" },
                        "opacity": { "value": 0.5 },
                        "size": { "value": 2 },
                        "line_linked": { "enable": true, "distance": 150, "color": "#ff0000", "opacity": 0.2, "width": 1 },
                        "move": { "enable": true, "speed": 2 }
                    }
                });
            }, 500);
        }
    }, 25);
};
