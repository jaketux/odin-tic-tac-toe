

const game = (function(){


const gameBoard = (function(){
    gameBoardArray = [,,,,,,,,,];
})()


function createPlayers(){

    function createPlayer(name, token, playernumber){

    const player = {}

    player.name = name
    player.token = token
    player.playernumber = playernumber

    return player

    }

    return createPlayer, 
    firstPlayer = createPlayer(prompt("Enter the first player's name here"), "X", 1), 
    secondPlayer = createPlayer(prompt("Enter the second player's name here"), "O", 2)

}

createPlayers()

})()

console.log(firstPlayer)
console.log(secondPlayer)


