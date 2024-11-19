    
        function displayController(){

            const player1 = document.querySelector('#player1')
            const player2 = document.querySelector('#player2')



    
            const game = gameController(player1.value,player2.value)

            const displayBoard = function(){

                let winnerOfGame = game.returnWinner()

                const players = game.getPlayers()
                const activePlayer = game.getActivePlayer();
                let currentBoard = game.getBoard()
                if (winnerOfGame === 0) {                    
                const bodyOfPage = document.querySelector("body")  
                const turnText = document.createElement("div")
                turnText.classList.add("turn-text")
                turnText.textContent =`${activePlayer.name}'s turn!`
                bodyOfPage.appendChild(turnText)
                const gameGrid = document.createElement("div")
                gameGrid.classList.add("gamegrid")
                bodyOfPage.appendChild(gameGrid)
                for (i = 0; i<currentBoard.length; i++){
                    if (currentBoard[i] === undefined){
                    const gameSquare = document.createElement("div")
                    gameSquare.classList.add("emptysquare")
                    gameSquare.id=i
                    gameGrid.appendChild(gameSquare)
                    gameSquare.addEventListener("click", function(){
                        game.playRound(gameSquare.id)
                        gameGrid.remove()
                        turnText.remove()
                        console.log(winnerOfGame)
                        displayBoard()
                    }) 
                } else if (currentBoard[i] === "X") {
                    const gameSquare = document.createElement("div")
                    gameSquare.classList.add("xsquare")
                    gameSquare.textContent="X"
                    gameGrid.appendChild(gameSquare)
                } else if (currentBoard[i] === "O") {
                const gameSquare = document.createElement("div")
                gameSquare.classList.add("osquare")
                gameSquare.textContent="O"
                gameGrid.appendChild(gameSquare)
                }
                }
            } else if ((winnerOfGame === players[0]) || 
                        (winnerOfGame === players[1])) {
                const bodyOfPage = document.querySelector("body")
                const turnText = document.createElement("div")
                turnText.classList.add("turn-text")
                turnText.textContent =`${winnerOfGame.name} has won the game!`
                bodyOfPage.appendChild(turnText)
                const gameGrid = document.createElement("div")
                gameGrid.classList.add("gamegrid")
                bodyOfPage.appendChild(gameGrid)
                for (i = 0; i<currentBoard.length; i++){
                    if (currentBoard[i] === undefined){
                    const gameSquare = document.createElement("div")
                    gameSquare.classList.add("emptysquare")
                    gameSquare.id=i
                    gameGrid.appendChild(gameSquare)
                    } else if (currentBoard[i] === "X") {
                    const gameSquare = document.createElement("div")
                    gameSquare.classList.add("xsquare")
                    gameSquare.textContent="X"
                    if (winnerOfGame === players[1]){
                        gameSquare.style.opacity="0.5"
                    }
                    gameGrid.appendChild(gameSquare)
                    } else if (currentBoard[i] === "O") {
                    const gameSquare = document.createElement("div")
                    gameSquare.classList.add("osquare")
                    gameSquare.textContent="O"
                    if (winnerOfGame === players[0]){
                        gameSquare.style.opacity="0.5"
                    }

                    gameGrid.appendChild(gameSquare)
                    }
            } 
            } else if (winnerOfGame === "Draw"){
                const bodyOfPage = document.querySelector("body")
                    const turnText = document.createElement("div")
                    turnText.classList.add("turn-text")
                    turnText.textContent =`It's a draw! Press "Restart Game to Play Again!`
                    bodyOfPage.appendChild(turnText)
                    const gameGrid = document.createElement("div")
                    gameGrid.classList.add("gamegrid")
                    bodyOfPage.appendChild(gameGrid)
                    for (i = 0; i<currentBoard.length; i++){
                        if (currentBoard[i] === undefined){
                        const gameSquare = document.createElement("div")
                        gameSquare.classList.add("emptysquare")
                        gameSquare.id=i
                        gameGrid.appendChild(gameSquare)
                        } else if (currentBoard[i] === "X") {
                        const gameSquare = document.createElement("div")
                        gameSquare.classList.add("xsquare")
                        gameSquare.textContent="X"
                        gameSquare.style.opacity="0.5"
                        gameGrid.appendChild(gameSquare)
                        } else if (currentBoard[i] === "O") {
                        const gameSquare = document.createElement("div")
                        gameSquare.classList.add("osquare")
                        gameSquare.textContent="O"
                        gameSquare.style.opacity="0.5"
                        gameGrid.appendChild(gameSquare)
                        }
                    }
            }
        }
        
        displayBoard()

        {return game, displayBoard}

    }

    
    const startGameBtn = document.querySelector("#start-btn")

    startGameBtn.addEventListener("click",function(){
        displayController()
        startGameBtn.disabled=true
    })
    
    function gameBoard(){
            
        const gameBoardArray = [,,,,,,,,,]

        const getBoard = function(){
            return gameBoardArray
        }

        const printBoard = function(){
            console.log(gameBoardArray)
        }

        const placeToken = function(location, player) {
            if (gameBoardArray[location] === undefined){
            gameBoardArray.splice(location, 1, player.token),
            console.log(gameBoardArray)}
            else if (gameBoardArray[location] === undefined){
            gameBoardArray.splice(location, 1, player.token),
            console.log(gameBoardArray)
            } 
        }
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
  
        const getPlayers = function(){
            return players
        }

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

        let winnerOfGame = 0

        const checkWinner = function(){
            let currentBoard = board.getBoard()
            if ((currentBoard[0] === activePlayer.token && currentBoard[1] === activePlayer.token && currentBoard[2] === activePlayer.token) || 
                (currentBoard[3] === activePlayer.token && currentBoard[4] === activePlayer.token && currentBoard[5] === activePlayer.token) || 
                (currentBoard[6] === activePlayer.token && currentBoard[7] === activePlayer.token && currentBoard[8] === activePlayer.token) || 
                (currentBoard[0] === activePlayer.token && currentBoard[3] === activePlayer.token && currentBoard[6] === activePlayer.token) || 
                (currentBoard[1] === activePlayer.token && currentBoard[4] === activePlayer.token && currentBoard[7] === activePlayer.token) || 
                (currentBoard[2] === activePlayer.token && currentBoard[5] === activePlayer.token && currentBoard[8] === activePlayer.token) ||  
                (currentBoard[0] === activePlayer.token && currentBoard[4] === activePlayer.token && currentBoard[8] === activePlayer.token) || 
                (currentBoard[2] === activePlayer.token && currentBoard[4] === activePlayer.token && currentBoard[6] === activePlayer.token)){
                    winnerOfGame = activePlayer

            } else if ((currentBoard[0, 1, 2, 3, 4, 5, 6, 7, 8] !== undefined)){
                    winnerOfGame = "Draw"


            } 
        } 

        const returnWinner = function(){
            return winnerOfGame
        }

        const playRound = function(location){
            if (getActivePlayer() === activePlayer){
            board.placeToken(location,activePlayer)
            checkWinner()
            switchPlayerTurn()
            newRound()
            }
            console.log(returnWinner())
            
        }

        newRound()

        return {playRound, getActivePlayer, getPlayers, getBoard: board.getBoard, checkWinner, returnWinner}        

    }
