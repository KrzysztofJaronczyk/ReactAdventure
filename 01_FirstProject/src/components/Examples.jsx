import { useState } from 'react'
import { EXAMPLES } from '../data.js'
import TabButton from './TabButton.jsx'

export default function Examples() {
	const [selectedTab, setSelectedTab] = useState('')
	function handleSelect(tabName) {
		setSelectedTab(tabName)
		// console.log(`You clicked on the ${tabName} tab`)
	}

	return (
		<section id='examples'>
			<h2>Examples</h2>
			<menu>
				<TabButton isSelected={selectedTab === 'components'} onSelect={() => handleSelect('components')}>
					Components
				</TabButton>
				<TabButton isSelected={selectedTab === 'jsx'} onSelect={() => handleSelect('jsx')}>
					Jsx
				</TabButton>
				<TabButton isSelected={selectedTab === 'props'} onSelect={() => handleSelect('props')}>
					Props
				</TabButton>
				<TabButton isSelected={selectedTab === 'state'} onSelect={() => handleSelect('state')}>
					State
				</TabButton>
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
	)
}
