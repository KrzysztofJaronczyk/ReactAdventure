// function CoreConcept(props) {
// 	return (
// 		<li>
// 			<img src={props.image} alt={props.imageDesc} />
// 			<h3>{props.title}</h3>
// 			<p>{props.desc}</p>
// 		</li>
// 	)
// }

export default function CoreConcept({ image, title, description }) {
	return (
		<li>
			<img src={image} alt={title} />
			<h3>{title}</h3>
			<p>{description}</p>
		</li>
	)
}
