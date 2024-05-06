import CoreConcept from './CoreConcept'
import { CORE_CONCEPTS } from '../data'

export default function CoreConcepts() {
	return (
		<section id='core-concepts'>
			<h2>Core Concepts</h2>
			<ul>
				{/* <CoreConcept
							image={CORE_CONCEPTS[0].image}
							title={CORE_CONCEPTS[0].title}
							description={CORE_CONCEPTS[0].description}
						/>
						<CoreConcept {...CORE_CONCEPTS[1]} />
						<CoreConcept {...CORE_CONCEPTS[2]} />
						<CoreConcept {...CORE_CONCEPTS[3]} /> */}
				{CORE_CONCEPTS.map(concept => (
					<CoreConcept key={concept.title} {...concept} />
				))}
			</ul>
		</section>
	)
}
