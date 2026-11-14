const levelContainer = document.getElementById("levelsDiv")
const playerContainer = document.getElementById("playersDiv")

const sarkdemtitle = document.getElementById("sarkdemtitle");
const leaderboardToggle = document.getElementById("leaderboardToggle");
const dropdownLeaderboard = document.getElementById("dropdown-leaderboard");

leaderboardToggle.addEventListener("click", () => {
    dropdownLeaderboard.hidden = !dropdownLeaderboard.hidden;
    leaderboardToggle.setAttribute("aria-expanded", String(!dropdownLeaderboard.hidden));
});

let levelI = 0;
let playerI = 0;

sarkdemtitle.addEventListener("click", () => {
    window.location
});



Promise.all([
    fetch("res/levels.json").then(response => response.json()),
    fetch("res/players.json").then(response => response.json())
]).then(([levels, players]) => {
    for (let i = 0; i < levels.length; i += 2) {
        const levelDiv = document.createElement("div");
        levelDiv.id = "level-" + (i / 2);
        levelDiv.classList.add("level");

        const img = document.createElement("img");
        img.src = levels[i + 1];
        img.alt = "";
        levelDiv.append(img);

        const rank = document.createElement("span");
        rank.classList.add("level-rank");
        rank.textContent = "#" + (i / 2 + 1);
        levelDiv.append(rank);

        const name = document.createElement("span");
        name.classList.add("level-name");
        name.textContent = levels[i];
        levelDiv.append(name);

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
