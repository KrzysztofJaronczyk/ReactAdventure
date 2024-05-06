import { useState } from 'react'
import { EXAMPLES } from '../data.js'
import TabButton from './TabButton.jsx'
import Section from './Section.jsx'
import Tabs from './Tabs.jsx'
export default function Examples() {
	const [selectedTab, setSelectedTab] = useState('')
	function handleSelect(tabName) {
		setSelectedTab(tabName)
		// console.log(`You clicked on the ${tabName} tab`)
	}

	return (
		<Section title='Examples' id='examples'>
			<Tabs
				buttonsContainer='menu'
				buttons={
					<>
						{' '}
						<TabButton isSelected={selectedTab === 'components'} onClick={() => handleSelect('components')}>
							Components
						</TabButton>
						<TabButton isSelected={selectedTab === 'jsx'} onClick={() => handleSelect('jsx')}>
							Jsx
						</TabButton>
						<TabButton isSelected={selectedTab === 'props'} onClick={() => handleSelect('props')}>
							Props
						</TabButton>
						<TabButton isSelected={selectedTab === 'state'} onClick={() => handleSelect('state')}>
							State
						</TabButton>
					</>
				}></Tabs>
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
		</Section>
	)
}
