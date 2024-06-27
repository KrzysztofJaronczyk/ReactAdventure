import React, { useState } from 'react'

const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
]

export default function GameBoard() {
	const [gameBoard, setGameBoard] = useState(initialGameBoard)

	function handleSelectSquare(rowIndex, colIndex) {
		setGameBoard(prevGameBoard => {
			const updatedBoard = prevGameBoard.map((row, rIndex) =>
				row.map((col, cIndex) => {
					if (rIndex === rowIndex && cIndex === colIndex) {
						return 'X'
					}
					return col
				})
			)
			return updatedBoard
		})
	}

	return (
		<ol id='game-board'>
			{gameBoard.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((playerSymbol, colIndex) => (
							<li key={colIndex}>
								<button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	)
}
