const playerContainer = document.getElementById("playersDiv");

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
