import Player from './components/Player'

function App() {
	return (
		<main>
			<div id='game-container'>
				<ol id='players'>
          <Player initialName="Player 1" initialSymbol="X"/>
          <Player initialName="Player 2" initialSymbol="Y"/>
				</ol>
			</div>
		</main>
	)
}

export default App
