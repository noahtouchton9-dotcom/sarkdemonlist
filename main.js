const levelContainer = document.getElementById("levelsDiv")
const playerContainer = document.getElementById("playersDiv")

const sarkdemtitle = document.getElementById("sarkdemtitle");

let levelI = 0;
let playerI = 0;

sarkdemtitle.addEventListener("click", () => {
    window.location
});

Promise.all([
    fetch("res/levels.json").then(response => response.json()),
    fetch("res/players.json").then(response => response.json())
]).then(([levels, players]) => {
    for (let i = 0; i < levels.length; i++) {
        const levelDiv = document.createElement("div");
        levelDiv.id = "level-" + i;
        levelDiv.classList.add("level");
        levelDiv.textContent = "#" + (i + 1) + ":  " + levels[i];
        levelContainer.append(levelDiv);
    }

    for (let i = 0; i < players.length; i++) {
        const playerDiv = document.createElement("div");
        playerDiv.id = "player-" + i;
        playerDiv.classList.add("level");
        playerDiv.textContent = "#" + (i + 1) + ":  " + players[i];
        playerContainer.append(playerDiv);
    }
});