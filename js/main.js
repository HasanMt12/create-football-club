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

    // 5 player added and calculate
function playerAdded() {
    let playerAddList = document.getElementById("Player-list");
    playerAddList.innerHTML = "";

    for (i = 0; i < playerNameList.length; i++) {
        let addPlayerName = playerNameList[i].playerName;
        let addSelectBtn = playerNameList[i].selectBtn;


    if (i != 5) {
        let playerList = document.createElement("ul");
        playerList.innerHTML = `
        <li>${i + 1}. ${addPlayerName}</li>
        
            
    `;
        // Button desabled
        playerAddList.appendChild(playerList);
        addSelectBtn.setAttribute("disabled", true)

    document.getElementById("per-player-clculate-btn").addEventListener("click", function(){
        let perPlayer = getElementById("per-player", true);
        let clculatePerPlayerPrice = perPlayer *  i;

         // display player expenses
        let playerExpenses = document.getElementById("player-expenses");
        let playerExpensesPrice = parseInt(playerExpenses.innerText);
        playerExpenses.innerText = clculatePerPlayerPrice.toFixed(2);

        // Calculate Total
    document.getElementById("calculate-total").addEventListener("click", function(){

                // Manager
        let manager = getElementById("manager", true)

                // Coach
        coach = getElementById("coach", true)

        let managerCoachTotal = manager + coach

                // Total expenses
            let totalExpenses = playerExpensesPrice + managerCoachTotal;

                // display total price
            let total = document.getElementById("total");
                    total.innerText = totalExpenses.toFixed(2) 
                })    
            })
        } 
        else {
            alert("You Can't Add More Than 5 Players...");
            return
        }
    }
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