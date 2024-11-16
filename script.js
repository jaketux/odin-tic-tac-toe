
const gameBoard = (function(){

    const gameBoardArray = [,,,,,,,,,]
    

    const placeToken = function(location, player, eligibility) {
        if (player === players[0] && eligibility === true && gameBoardArray[location] === undefined){
        gameBoardArray.splice(location, 1, "X"),
        console.log(gameBoardArray)}
        else if (player === players[1] && eligibility === false && gameBoardArray[location] === undefined){
        gameBoardArray.splice(location, 1, "O"),
        console.log(gameBoardArray)
        } 
    }

    console.log(gameBoardArray)

    return {placeToken}    

    })()    

function createPlayers(name1,name2){

    function createPlayer(name){
        const playerName = name;
        return {playerName}
    }

    const player1 = createPlayer(name1)

    const player2 = createPlayer(name2)

    return players = [player1, player2]

}

createPlayers("Paul", "Steve")


console.log(players[0])
console.log(players[1])

const gameFlow = (function(){

    let playerToggle = false 

    const playerTurn = function(){
        if (playerToggle === true) {
            playerToggle = false;
            return true           
        }
        if (playerToggle === false){
            playerToggle = true;
            return false
        }
        
    }    
    
    return {playerTurn}

})()


gameBoard.placeToken(1,players[1], gameFlow.playerTurn())
    gameBoard.placeToken(1,players[0], gameFlow.playerTurn())



const checkWinner = function(gameBoardArray){
    if (gameBoardArray[0,1,2] === "X" || 
        gameBoardArray[3,4,5] === "X" || 
        gameBoardArray[6,7,8] === "X" || 
        gameBoardArray[0,3,6] === "X" || 
        gameBoardArray[1,4,7] === "X" || 
        gameBoardArray[2,5,8] === "X" ||
        gameBoardArray[0,4,8] === "X" || 
        gameBoardArray[2,4,6] === "X"){
            console.log(player1.playerName+" is the winner!")
    } else if (
        gameBoardArray[0,1,2] === "O" || 
        gameBoardArray[3,4,5] === "O" || 
        gameBoardArray[6,7,8] === "O" || 
        gameBoardArray[0,3,6] === "O" || 
        gameBoardArray[1,4,7] === "O" || 
        gameBoardArray[2,5,8] === "O" ||
        gameBoardArray[0,4,8] === "O" || 
        gameBoardArray[2,4,6] === "O" ){
            console.log(player2.playerName+" is the winner!")
        }
}    


// function checkWinner()





