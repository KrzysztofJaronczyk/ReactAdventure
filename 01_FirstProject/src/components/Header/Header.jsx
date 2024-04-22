import './Header.css'

const readctDescriptions = ['Fundamental', 'Cruical', 'Important', 'Essential']

function getRandomInt(max) {
	return Math.floor(Math.random() * max)
}

export default function Header() {
	const description = readctDescriptions[getRandomInt(readctDescriptions.length)]
	return (
		<header>
			<img src='src/assets/react-core-concepts.png' alt='Stylized atom' />
			<h1>React Essentials</h1>
			<p>{description} React concepts you will need for almost any app you are going to build!</p>
		</header>
	)
}
