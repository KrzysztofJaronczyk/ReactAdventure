import { useState } from 'react'

export default function Player({ initialName, initialSymbol }) {
	const [playerName, setPlayerName] = useState(initialName)
	const [symbol, setSymbol] = useState(initialSymbol)

	const [isEditing, setIsEditing] = useState(false)

	function handleEditClick() {
		// if (isEditing == false) {
		// 	setIsEditing(true)
		// } else setIsEditing(false)
		// setIsEditing(!isEditing)
		setIsEditing(editing => !editing)
	}

	function handleNameChange(event) {
		// console.log(event)
		setPlayerName(event.target.value)
	}

	function handleSymbolChange(event) {
		// console.log(event)
		setSymbol(event.target.value)
	}

	return (
		<li>
			<span className='player'>
				{isEditing ? (
					<>
						<input type='text' required value={playerName} onChange={handleNameChange} />
						<input type='text' required value={symbol} onChange={handleSymbolChange} />
					</>
				) : (
					<>
						<span className='player-name'>{playerName}</span>
						<span className='player-symbol'>{symbol}</span>
					</>
				)}
			</span>
			<button onClick={handleEditClick}> {isEditing ? 'Save' : 'Edit'}</button>
		</li>
	)
}
