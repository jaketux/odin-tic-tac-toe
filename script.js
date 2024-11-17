
    const createPlayers = function(name1,name2){

        function createPlayer(name){
            const playerName = name;
            return {playerName}
    }

        const player1 = createPlayer(name1)

        const player2 = createPlayer(name2)

        return players = [player1, player2]

    }

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
            if ((currentBoard[0] === activePlayer.token && currentBoard[1] === activePlayer.token && currentBoard[2] === activePlayer.token) || 
                (currentBoard[3] === activePlayer.token && currentBoard[4] === activePlayer.token && currentBoard[5] === activePlayer.token) || 
                (currentBoard[6] === activePlayer.token && currentBoard[7] === activePlayer.token && currentBoard[8] === activePlayer.token) || 
                (currentBoard[0] === activePlayer.token && currentBoard[3] === activePlayer.token && currentBoard[6] === activePlayer.token) || 
                (currentBoard[1] === activePlayer.token && currentBoard[4] === activePlayer.token && currentBoard[7] === activePlayer.token) || 
                (currentBoard[2] === activePlayer.token && currentBoard[5] === activePlayer.token && currentBoard[8] === activePlayer.token) ||  
                (currentBoard[0] === activePlayer.token && currentBoard[4] === activePlayer.token && currentBoard[8] === activePlayer.token) || 
                (currentBoard[2] === activePlayer.token && currentBoard[4] === activePlayer.token && currentBoard[6] === activePlayer.token)){
                    console.log(activePlayer.name+" is the winner!")
                    return result = activePlayer    
            } else if (
                (currentBoard[0, 1, 2, 3, 4, 5, 6, 7, 8] !== undefined)){
                    console.log("It's a draw!")
                return result = draw}
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

        return {playRound, getActivePlayer, getBoard: board.getBoard}        

    }


    function displayController(){

        const game = gameController()

        const activePlayer = game.getActivePlayer();

        const displayBoard = function(){

            let currentBoard = game.getBoard()

            const bodyOfPage = document.querySelector("body")  
            const nextTurn = document.createElement("div")
            nextTurn.classList.add("next-turn")
            nextTurn.textContent = `${activePlayer.name}'s turn...`
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

        displayBoard()

        {return game, displayBoard, activePlayer}

        // displayBoard

        // - blank grid div with different sub divs depending on data in board, that allow the use of playRound(x) if square is empty and number passed through depends  on the square it is

        // announceWinner
        //     - changes the DOM based on the winner. 
    }

    const startGameBtn = document.querySelector("#start-btn")

    startGameBtn.addEventListener("click",function(){
        gameController(player1.value, player2.value)
        displayController()
    })






 





