var uwu = "uwuwowuwu";


const delay = ms => new Promise(res => setTimeout(res, ms));


const yourFunction = async () => {
    while (true) {
        var item = document.getElementById("main-alts").textContent=uwu;
        await delay(50);
        var item = document.getElementById("main-alts").textContent="miau";
        await delay(50);
    }
}
