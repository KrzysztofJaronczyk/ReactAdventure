import { CORE_CONCEPTS } from './data.js'
import { EXAMPLES } from './data.js'
import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept'
import TabButton from './components/TabButton.jsx'

import { useState } from 'react'
function App() {
	const [selectedTab, setSelectedTab] = useState('')
	function handleSelect(tabName) {
		setSelectedTab(tabName)
		// console.log(`You clicked on the ${tabName} tab`)
	}
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
				<section id='examples'>
					<h2>Examples</h2>
					<menu>
						<TabButton isSelected={selectedTab === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
						<TabButton isSelected={selectedTab === 'jsx'} onSelect={() => handleSelect('jsx')}>Jsx</TabButton>
						<TabButton isSelected={selectedTab === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
						<TabButton isSelected={selectedTab === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
					</menu>
					{/* {!selectedTab && <p>Please select a topic.</p>}
					{selectedTab && (
						<div id='tab-content'>
							<h3>{EXAMPLES[selectedTab].title}</h3>
							<p>{EXAMPLES[selectedTab].description}</p>
							<pre>
								<code>{EXAMPLES[selectedTab].code}</code>
							</pre>
						</div>
					)} */}
					{!selectedTab ? (
						<p>Please select a topic.</p>
					) : (
						<div id='tab-content'>
							<h3>{EXAMPLES[selectedTab].title}</h3>
							<p>{EXAMPLES[selectedTab].description}</p>
							<pre>
								<code>{EXAMPLES[selectedTab].code}</code>
							</pre>
						</div>
					)}
				</section>
			</main>
		</div>
	)
}

export default App
