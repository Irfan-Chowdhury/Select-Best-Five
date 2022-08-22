function myFunction(playerName, playerNo) {
    const node = document.createElement("p"); // Create an "p" node:
    const textnode = document.createTextNode(playerNo+'. '+playerName); // Create a text node:
    node.appendChild(textnode); // Append the text node to the "li" node:
    document.getElementById("selectV").appendChild(node); // Append the "p" node to the list:
}

function disabledAndBackgroundColorById(playerId){
    const element = document.getElementById(playerId);
    element.disabled = true;
    element.style.backgroundColor= "rgb(162,169,175)";
}

function addPlayer(playerId,playerName){
    player.push(playerName);
    if (player.length > 5 ) {
        return;
    }

    disabledAndBackgroundColorById(playerId);
    myFunction(playerName, player.length);
}

// Player 1
const player = [];

document.getElementById('playerSlect-1').addEventListener('click',function () {
    const playerName  = document.getElementById('playerName-1').innerText;
    addPlayer('playerSlect-1',playerName)
    // disabledAndBackgroundColorById('playerSlect-1');
    // player.push(playerName);
    // myFunction(playerName, player.length);
});

// Player 2
document.getElementById('playerSlect-2').addEventListener('click',function () {
    const playerName  = document.getElementById('playerName-2').innerText;
    addPlayer('playerSlect-2',playerName)
});

// Player 3
document.getElementById('playerSlect-3').addEventListener('click',function () {
    const playerName  = document.getElementById('playerName-3').innerText;
    addPlayer('playerSlect-3',playerName)
});

// Player 4
document.getElementById('playerSlect-4').addEventListener('click',function () {
    const playerName  = document.getElementById('playerName-4').innerText;
    addPlayer('playerSlect-4',playerName)
});

// Player 5
document.getElementById('playerSlect-5').addEventListener('click',function () {
    const playerName  = document.getElementById('playerName-5').innerText;
    addPlayer('playerSlect-5',playerName)
});

// Player 6
document.getElementById('playerSlect-6').addEventListener('click',function () {
    const playerName  = document.getElementById('playerName-6').innerText;
    addPlayer('playerSlect-6',playerName)
});
