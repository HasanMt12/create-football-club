// select player name and collect and added/ push 
let playerDetails = [];
function selectPlayers(element) {
    let playerName = element.parentNode.children[0].innerText;
    let selectBtn = element.parentNode.children[2];
    let playerObj = {
        playerName: playerName,
        selectBtn : selectBtn
    }
    playerDetails.push(playerObj);
    let setPlayerList = playerAdded(playerDetails);
    return setPlayerList;
}