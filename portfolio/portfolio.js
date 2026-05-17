var uwu = ["Desarrollador", "Forense Informático", "Técnico", "Diseñador", "Arquitecto"];

const delay = ms => new Promise(res => setTimeout(res, ms));

const yourFunction = async () => {
    while (true) {
        var item = document.getElementById("main-alts").textContent=uwu[0];
        document.getElementById("main-alts").style.opacity = 1;
        await delay(2000);
        document.getElementById("main-alts").style.opacity = 0;
        await delay(200);
        
        var item = document.getElementById("main-alts").textContent=uwu[1];
        document.getElementById("main-alts").style.opacity = 1;
        await delay(2000);
        document.getElementById("main-alts").style.opacity = 0;
        await delay(200);
        
        var item = document.getElementById("main-alts").textContent=uwu[2];
        document.getElementById("main-alts").style.opacity = 1;
        await delay(2000);
        document.getElementById("main-alts").style.opacity = 0;
        await delay(200);

        var item = document.getElementById("main-alts").textContent=uwu[3];
        document.getElementById("main-alts").style.opacity = 1;
        await delay(2000);
        document.getElementById("main-alts").style.opacity = 0;
        await delay(200);

        var item = document.getElementById("main-alts").textContent=uwu[4];
        document.getElementById("main-alts").style.opacity = 1;
        await delay(2000);
        document.getElementById("main-alts").style.opacity = 0;
        await delay(200);
    }
}

yourFunction();