import "./App.css";
import React, { useState, useEffect } from "react";
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import GridSquare from './components/GridSquare';
import ResetButton from './components/ResetButton';
import { Patterns } from './WinningPatterns';

function App() {
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [player, setPlayer] = useState("O");
  const [winner, setWinner] = useState("Game In Progress");
  const [playerOWins, setPlayerOWins] = useState(0);
  const [playerXWins, setPlayerXWins] = useState(0);
  const [totalGames, setTotalGames] = useState(0);
  const [winnerFound, setWinnerFound] = useState(false);

  const selectSquare = (squareIndex) => {
    setBoard(
      board.map((boardValue, boardIndex) => {
        if (boardIndex === squareIndex && boardValue === "") {
          return player;
        } else {
          return boardValue;
        }
      })
    );
  };

  useEffect(() => {
    checkWinner();
    checkDraw();

    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }, [board]);

  useEffect(() => {
    if (winner !== "Game In Progress") {
      setTimeout(() => {
        resetBoard();
      }, 2000); // Delay for 2 seconds (2000 milliseconds)
    }
  }, [winner]);

  const checkWinner = () => {
    let isWinner = false;

    Patterns.forEach((x) => {
      if (
        player === board[x[0]] &&
        player === board[x[1]] &&
        player === board[x[2]]
      ) {
        isWinner = true;
        setWinnerFound(true);
      }
    });

    if (isWinner) {
      setWinner(`Player ${player} Wins!`);

      if (player === "X") {
        setPlayerXWins(playerXWins + 1);
      } else {
        setPlayerOWins(playerOWins + 1);
      }
      setTotalGames(totalGames + 1);
    }
  };

  const checkDraw = () => {
    let filled = true;
    board.forEach((index) => {
      if (index === "") {
        filled = false;
      }
    });

    if (filled && winnerFound===false) {
      setWinner('Game Ended In A Draw');
      setTotalGames(totalGames + 1);
    }
    else if (filled && winnerFound===true) {
      setTotalGames(totalGames + 1);
      resetBoard();
    }
  };

  const resetBoard = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("O");
    setWinner("Game In Progress");
    setWinnerFound(false);
  };

  return (
    <div className="App">
      <Navigation />

      <div className="mainSection">
        <div className='scoreBoard'>
          <p> Games Played:  <strong>{totalGames}</strong></p>
          <p> Score:  Player X <strong className='green'>[{playerXWins}]</strong>  -  Player O <strong className='green'>[{playerOWins}]</strong></p>
          <p> Turn:  <strong className='red'>Player {player}</strong></p>
        </div>
        <div className='board'>
          <h2 className='resultDisplay'> {winner}</h2>

          <div className='grid'>
                <GridSquare 
                  boardValue={board[0]}
                  selectSquare={()=>{selectSquare(0)}}
                  data-testid="gridSquareTest1"
                />
                <GridSquare 
                  boardValue={board[1]}
                  selectSquare={()=>{selectSquare(1)}}                
                />
                <GridSquare 
                  boardValue={board[2]}
                  selectSquare={()=>{selectSquare(2)}}          
                />
                <GridSquare 
                  boardValue={board[3]}
                  selectSquare={()=>{selectSquare(3)}}
                />
                <GridSquare
                  boardValue={board[4]}
                  selectSquare={()=>{selectSquare(4)}}
                />
                <GridSquare
                  boardValue={board[5]}
                  selectSquare={()=>{selectSquare(5)}}
                />
                <GridSquare 
                  boardValue={board[6]}
                  selectSquare={()=>{selectSquare(6)}}
                />
                <GridSquare 
                  boardValue={board[7]}
                  selectSquare={()=>{selectSquare(7)}}
                />
                <GridSquare 
                  boardValue={board[8]}
                  selectSquare={()=>{selectSquare(8)}}
                />
          </div>

          <div className='resetButt'>
            <ResetButton reset={resetBoard} />
          </div>

        </div>

      </div>

      <Footer />
    </div>
  );
}

export default App;

