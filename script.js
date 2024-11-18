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
            else if (player === players[1] && gameBoardArray[location] === undefined){
            gameBoardArray.splice(location, 1, player.token),
            console.log(gameBoardArray)
            } 
        }
        return {placeToken,getBoard,printBoard}
    }

    
    function gameController(playerOneName,playerTwoName) {

        const board = gameBoard()

        const display = displayController()
      
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
            if ((currentBoard[0] === activePlayer.token && currentBoard[1] === activePlayer.token && currentBoard[2] === activePlayer.token) || 
                (currentBoard[3] === activePlayer.token && currentBoard[4] === activePlayer.token && currentBoard[5] === activePlayer.token) || 
                (currentBoard[6] === activePlayer.token && currentBoard[7] === activePlayer.token && currentBoard[8] === activePlayer.token) || 
                (currentBoard[0] === activePlayer.token && currentBoard[3] === activePlayer.token && currentBoard[6] === activePlayer.token) || 
                (currentBoard[1] === activePlayer.token && currentBoard[4] === activePlayer.token && currentBoard[7] === activePlayer.token) || 
                (currentBoard[2] === activePlayer.token && currentBoard[5] === activePlayer.token && currentBoard[8] === activePlayer.token) ||  
                (currentBoard[0] === activePlayer.token && currentBoard[4] === activePlayer.token && currentBoard[8] === activePlayer.token) || 
                (currentBoard[2] === activePlayer.token && currentBoard[4] === activePlayer.token && currentBoard[6] === activePlayer.token)){
                    console.log(activePlayer.name+" is the winner!")
                    return activePlayer    
            } else if (
                (currentBoard[0, 1, 2, 3, 4, 5, 6, 7, 8] !== undefined)){
                    console.log("It's a draw!")
                return "Draw"}
        } 

        const playRound = function(location){
            if (getActivePlayer() === activePlayer){
            board.placeToken(location,activePlayer)}
            if (checkWinner() === activePlayer){
                display.announceWinner()
            } else if (checkWinner() === "Draw") {
                display.announceWinner()
            }
            switchPlayerTurn()
            newRound()
            }
                
        const declareWinner = function(){
            if (checkWinner() === players[0]){
                return players[0]
            } else if   (checkWinner() === players[1]){
                return players[1]}
            else if (checkWinner() === "Draw"){
                return "Draw"
            }
        }

        newRound()
        console.log(players)

        return {playRound, getActivePlayer, getBoard: board.getBoard, checkWinner, declareWinner}        

    }

    function displayController(){

        const player1 = document.querySelector('#player1')
        const player2 = document.querySelector('#player2')

        const game = gameController(player1.value,player2.value)

        const activePlayer = game.getActivePlayer();


        const displayBoard = function(){
            game.getActivePlayer()
            let currentBoard = game.getBoard()
            const bodyOfPage = document.querySelector("body")  
            const nextTurn = document.createElement("div")
            nextTurn.classList.add("next-turn")
            nextTurn.textContent = `${game.getActivePlayer().name}'s turn...`
            bodyOfPage.appendChild(nextTurn)
            const gameGrid = document.createElement("div")
            gameGrid.classList.add("gamegrid")
            bodyOfPage.appendChild(gameGrid)
            for (i = 0; i<currentBoard.length; i++){
            if (currentBoard[i] === undefined){
            const gameSquare = document.createElement("div")
            gameSquare.classList.add("emptysquare")
            gameSquare.id=i
            gameSquare.addEventListener("click", function(){
                game.playRound(gameSquare.id);
                gameGrid.remove()
                nextTurn.remove()
                console.log(game.getActivePlayer().name)
                displayBoard()               
            })
            gameGrid.appendChild(gameSquare)

            }
            else if (currentBoard[i] === "X") {
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
        }

        const announceWinner = function(){
            nextTurn.remove()
            const winner = game.declareWinner()
            const bodyOfPage = document.querySelector("body")  
            const xGameSquares = document.querySelectorAll(".xsquare")
            const oGameSquares = document.querySelectorAll(".osquare")
            if (winner === players[0]){
                const winnerText = document.createElement("div")
                winnerText.classList.add("winner-text")
                winnerText.textContent = `${winner.name} is the winner! Press "Start Game" to play again`
                bodyOfPage.append(winnerText)
                for (oGameSquare of oGameSquares){
                    oGameSquare.style.opacity = "0.5"
                }
            } else if (winner === players[1]){
                const winnerText = document.createElement("div")
                winnerText.classList.add("winner-text")
                winnerText.textContent = `${winner.name} is the winner! Press "Start Game" to play again`
                bodyOfPage.append(winnerText)
                for (xGameSquare of xGameSquares){
                    xGameSquare.style.opacity = "0.5"
                }
            } else if (winner === "Draw"){
                const winnerText = document.createElement("div")
                winnerText.classList.add("winner-text")
                winnerText.textContent = `It's a Draw! Press "Start Game" to play again`
                bodyOfPage.append(winnerText)
                for (xGameSquare of xGameSquares){
                    xGameSquare.style.opacity = "0.5"
                }

                for (oGameSquare of oGameSquares){
                    oGameSquare.style.opacity = "0.5"
                }
            }

        }

        displayBoard()

        {return game, displayBoard, activePlayer, announceWinner}

        // displayBoard

        // - blank grid div with different sub divs depending on data in board, that allow the use of playRound(x) if square is empty and number passed through depends  on the square it is

        // announceWinner
        //     - changes the DOM based on the winner. 
    }

    const startGameBtn = document.querySelector("#start-btn")

    startGameBtn.addEventListener("click",function(){
        displayController()
        console.log(player1,player2)
    })








 





