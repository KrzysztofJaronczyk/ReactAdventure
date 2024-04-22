import componentsImg from './assets/components.png'
import { CORE_CONCEPTS } from './data.js'

const readctDescriptions = ['Fundamental', 'Cruical', 'Important', 'Essential']

function getRandomInt(max) {
	return Math.floor(Math.random() * max)
}

function Header() {
	const description = readctDescriptions[getRandomInt(readctDescriptions.length)]
	return (
		<header>
			<img src='src/assets/react-core-concepts.png' alt='Stylized atom' />
			<h1>React Essentials</h1>
			<p>{description} React concepts you will need for almost any app you are going to build!</p>
		</header>
	)
}

// function CoreConcept(props) {
// 	return (
// 		<li>
// 			<img src={props.image} alt={props.imageDesc} />
// 			<h3>{props.title}</h3>
// 			<p>{props.desc}</p>
// 		</li>
// 	)
// }

function CoreConcept({ image, title, description }) {
	return (
		<li>
			<img src={image} alt={title} />
			<h3>{title}</h3>
			<p>{description}</p>
		</li>
	)
}

function App() {
	return (
		<div>
			<Header />
			<main>
				<section id='core-concepts'>
					<h2>Core Concepts</h2>
					<ul>
						<CoreConcept
							image={CORE_CONCEPTS[0].image}
							title={CORE_CONCEPTS[0].title}
							description={CORE_CONCEPTS[0].description}
						/>
						<CoreConcept {...CORE_CONCEPTS[1]} />
						<CoreConcept {...CORE_CONCEPTS[2]} />
						<CoreConcept {...CORE_CONCEPTS[3]} />
					</ul>
				</section>
			</main>
		</div>
	)
}

export default App
