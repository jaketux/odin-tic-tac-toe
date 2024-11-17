
    const createPlayers = function(name1,name2){

        function createPlayer(name){
            const playerName = name;
            return {playerName}
    }

        const player1 = createPlayer(name1)

        const player2 = createPlayer(name2)

        return players = [player1, player2]

    }

    function gameBoard (){
    
        const gameBoardArray = [,,,,,,,,,]

        const getBoard = function(){
            return gameBoardArray
        }

        const printBoard = function(){
            console.log(gameBoardArray)
        }

        const placeToken = function(location, player) {
            if (gameBoardArray[location] === undefined){
            gameBoardArray.splice(location, 1, game.getActivePlayer().token),
            console.log(gameBoardArray)}
            else if (player === players[1] && gameBoardArray[location] === undefined){
            gameBoardArray.splice(location, 1, game.getActivePlayer().token),
            console.log(gameBoardArray)
            } 
        }
        console.log(gameBoardArray)
        return {placeToken,getBoard,printBoard}
    }

    function gameController(playerOneName,playerTwoName) {


        const board = gameBoard()
      
        const players = [
          {
            name: playerOneName,
            token: "X"
          },
          {
            name: playerTwoName,
            token: "O"
          }
        ];

        let activePlayer = players[0]

        const switchPlayerTurn = function(){
            activePlayer = activePlayer === players[0] ? players[1] : players[0]  
        }

        const getActivePlayer = function(){
            return activePlayer
        }

        const newRound = function(){
            board.getBoard()
        }

        const checkWinner = function(){
            let currentBoard = board.getBoard()
            if ((currentBoard[0] && currentBoard[1] && currentBoard[2] === players[0].token) || 
                (currentBoard[3] && currentBoard[4] && currentBoard[5] === players[0].token) || 
                (currentBoard[6] && currentBoard[7] && currentBoard[8] === players[0].token) || 
                (currentBoard[0] && currentBoard[3] && currentBoard[6] === players[0].token) || 
                (currentBoard[1] && currentBoard[4] && currentBoard[7] === players[0].token) || 
                (currentBoard[2] && currentBoard[5] && currentBoard[8] === players[0].token) || 
                (currentBoard[0] && currentBoard[4] && currentBoard[8] === players[0].token) || 
                (currentBoard[2] && currentBoard[4] && currentBoard[6] === players[0].token)){
                    console.log(players[0].name+" is the winner!")
            } else if (
                (currentBoard[0] && currentBoard[1] && currentBoard[2] === players[1].token) || 
                (currentBoard[3] && currentBoard[4] && currentBoard[5] === players[1].token) || 
                (currentBoard[6] && currentBoard[7] && currentBoard[8] === players[1].token) || 
                (currentBoard[0] && currentBoard[3] && currentBoard[6] === players[1].token) || 
                (currentBoard[1] && currentBoard[4] && currentBoard[7] === players[1].token) || 
                (currentBoard[2] && currentBoard[5] && currentBoard[8] === players[1].token) || 
                (currentBoard[0] && currentBoard[4] && currentBoard[8] === players[1].token) || 
                (currentBoard[2] && currentBoard[4] && currentBoard[6] === players[1].token)) {
                    console.log(players[1].name+" is the winner!")
            } else if (
                currentBoard[0-9] !== undefined) {
                    console.log("It's a draw!~")}
        } 

        const playRound = function(location){
            if (getActivePlayer() === activePlayer){
            board.placeToken(location,activePlayer)
            checkWinner()
            switchPlayerTurn()
            newRound()
            console.log(players[0].token)
            console.log(players[1].token)
            }
        }

        console.log(players[0])
        

        newRound()

        return {playRound, getActivePlayer}        

    }

    


    const game = gameController("Bob", "Whitney")






 





