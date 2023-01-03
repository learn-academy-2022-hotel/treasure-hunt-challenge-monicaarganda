import React, { useState } from "react"
import Square from "./components/Square"
import "./App.css"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  const handleGamePlay = (clickSquare) => {
    alert(clickSquare)
  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="board">
      {/* board is made up of square, just makes sense */}
      {board.map((square, index) => {
        return(
        <Square 
        square={square} 
        index={index} 
        handleGamePlay= {handleGamePlay}
        />
        )
      })}
      </div>
    </>
  )
}

export default App
