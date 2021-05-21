import React from "react"
import content from "../content"
import "./form.css"

const {
	form: { title, inputs, callToAction },
} = content

const Form = props => {
	const inputsList = Object.entries(inputs)
	return (
		<form
			className="Form"
			action="https://formkeep.com/f/c3f6e92c7bcd"
			accept-charset="UTF-8"
			enctype="multipart/form-data"
			method="POST"
		>
			<h2 className="Form__title">{title}</h2>
			<section className="Form__inputs">
				{inputsList.map(input => {

					const [name, value] = input
					return <input 
						type="text" 
						placeholder={value} 
						title={value}
						id={name}
						name={value.toLowerCase()}
					/>					
				})}
			</section>
			<input type="submit" value={callToAction} className="callToAction" />
		</form>
	)
}

export default Form
