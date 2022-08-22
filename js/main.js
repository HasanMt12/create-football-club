
// Common js Function
function getElementById(getElementId, isTrue){
    let elementId = document.getElementById(getElementId);
    let elementContent;

    if(isTrue === true){
        elementContent = parseInt(elementId.value);
    }
    else{
        elementContent == parseInt(elementId.innerText)
    }
    elementId = elementContent;
    return elementContent;
}
        // select player name and collect and added/ push 
let playerNameList = [];
function selectPlayers(element) {
    let playerName = element.parentNode.children[0].innerText;
    let selectBtn = element.parentNode.children[2];
    let playerObj = {
        playerName: playerName,
        selectBtn : selectBtn
    }
    playerNameList.push(playerObj);
    let setPlayerList = playerAdded(playerNameList);
    return setPlayerList;
}