

const gameBoardArray = 
    ["O","O","X",
    "X","X","O",
    "O","O","O"];  

let counter = 0

function createPlayer(name){
    const playerName = name;
    const getValues = function(){
        if (counter === 0){ 
            token = "X"
            number = 1;
            counter++
            return [token, number]
        } else if (counter === 1){
            token = "O"
            number = 2;
            counter = 0
            return [token, number]
        }
    }
return {playerName, getValues}
}

const player1 = createPlayer('willis')
player1.getValues()

const player2 = createPlayer('bruce')
player2.getValues()

console.log(player1.getValues()[0])
console.log(player2.getValues()[1])

// gameBoardArray.push(player1.getValues()[0])

console.log(gameBoardArray[0])

function checkWinner(){
    if (gameBoardArray[0,1,2] || 
        gameBoardArray[3,4,5] || 
        gameBoardArray[6,7,8] || 
        gameBoardArray[0,3,6] || 
        gameBoardArray[1,4,7] || 
        gameBoardArray[2,5,8] ||
        gameBoardArray[0,4,8] || 
        gameBoardArray[2,4,6] === "X"){
            console.log(player1.playerName+" is the winner!")
    } else if (
        gameBoardArray[0,1,2] || 
        gameBoardArray[3,4,5] || 
        gameBoardArray[6,7,8] || 
        gameBoardArray[0,3,6] || 
        gameBoardArray[1,4,7] || 
        gameBoardArray[2,5,8] ||
        gameBoardArray[0,4,8] || 
        gameBoardArray[2,4,6] === "O"){
            console.log(player2.playerName+" is the winner!")
        }
}    

console.log(checkWinner())

012
345
678
036 
147
258
048
246




