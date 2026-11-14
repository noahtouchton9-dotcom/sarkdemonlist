const playerContainer = document.getElementById("playersDiv");
const leaderboardToggle = document.getElementById("leaderboardToggle");
const dropdownLeaderboard = document.getElementById("dropdown-leaderboard");

leaderboardToggle.addEventListener("click", () => {
    dropdownLeaderboard.hidden = !dropdownLeaderboard.hidden;
    leaderboardToggle.setAttribute("aria-expanded", String(!dropdownLeaderboard.hidden));
});

fetch("res/players.json")
    .then(response => response.json())
    .then(players => {
        for (let i = 0; i < players.length; i++) {
            const playerDiv = document.createElement("div");
            playerDiv.id = "player-" + i;
            playerDiv.classList.add("level");
            playerDiv.textContent = "#" + (i + 1) + ":  " + players[i];
            playerContainer.append(playerDiv);
        }
    });
