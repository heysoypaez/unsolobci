import React, { useRef, useState, useEffect } from "react"
import content from "../content"
import "./form.css"

const {
	form: { title, inputs, callToAction, success },
} = content

const Form = props => {
	const formRef = useRef(null)
	const [submitted, setSubmitted] = useState(false)
	const handleFormChange = event => {
		const inputElements = [...formRef.current.querySelectorAll(".Form__input")]
		const callToAction = formRef.current.querySelector(".callToAction")
		const formValid = inputElements.every(input => {
			return input.value.length >= 2
		})
		formValid ? (callToAction.disabled = false) : (callToAction.disabled = true)
	}
	const handleSubmit = event => setSubmitted(true)
	
	useEffect(()=>{
		setSubmitted(Boolean(sessionStorage.getItem("bci-submitted")))
	},[])
	useEffect(() => {
		submitted && sessionStorage.setItem("bci-submitted", true)
	}, [submitted])

	return (
		<form
			className="Form"
			action="https://formkeep.com/f/c3f6e92c7bcd"
			acceptCharset="UTF-8"
			encType="multipart/form-data"
			method="POST"
			ref={formRef}
			onChange={handleFormChange}
			onSubmit={handleSubmit}
		>
			<h2 className="Form__title">{title}</h2>
			<section className="Form__inputs">
				{Object.entries(inputs).map(input => {
					const [name, value] = input
					const type = name === "email" ? "email" : "text"
					return (
						<input
							className="Form__input"
							key={name}
							type={type}
							placeholder={value}
							title={value}
							id={name}
							name={name}
							required={true}
						/>
					)
				})}
			</section>
			<input
				type="submit"
				value={callToAction}
				className="callToAction"
				disabled
			/>
			{submitted && (
				<section className="Form__success">
					<p>{success[0]}</p>
					<p><i>{success[1]}</i></p>
				</section>
			)}
		</form>
	)
}

export default Form
