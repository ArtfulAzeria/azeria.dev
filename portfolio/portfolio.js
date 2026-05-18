var uwu = ["Desarrollador", "Forense Informático", "Técnico", "Diseñador", "Arquitecto"];


function delay(time) {
        return new Promise(function(resolve) {
        setTimeout(resolve, time);
        });
    }

const transitionDelay = 1000;
const viewTime = 2000;

const yourFunction = async () => {
    while (true) {
        document.getElementById("main-alts").textContent=uwu[0];
        document.getElementById("main-alts").style.opacity = 1;
        
        await delay(transitionDelay);
        document.getElementById("main-alts").style.transform = "perspective(5em) rotateX(5deg) scale(1, 0.5)";
        await delay(viewTime);
        document.getElementById("main-alts").style.opacity = 0;
        document.getElementById("main-alts").style.transform = "none";
        await delay(transitionDelay);
        
        document.getElementById("main-alts").textContent=uwu[1];
        document.getElementById("main-alts").style.opacity = 1;
        await delay(transitionDelay);
        await delay(viewTime);
        document.getElementById("main-alts").style.opacity = 0;
        await delay(transitionDelay);

        document.getElementById("main-alts").textContent=uwu[2];
        document.getElementById("main-alts").style.opacity = 1;
        await delay(transitionDelay);
        await delay(viewTime);
        document.getElementById("main-alts").style.opacity = 0;
        await delay(transitionDelay);

        document.getElementById("main-alts").textContent=uwu[3];
        document.getElementById("main-alts").style.opacity = 1;
        await delay(transitionDelay);
        await delay(viewTime);
        document.getElementById("main-alts").style.opacity = 0;
        await delay(transitionDelay);

        document.getElementById("main-alts").textContent=uwu[4];
        document.getElementById("main-alts").style.opacity = 1;
        await delay(transitionDelay);
        await delay(viewTime);
        document.getElementById("main-alts").style.opacity = 0;
        await delay(transitionDelay);
    }
}

yourFunction();