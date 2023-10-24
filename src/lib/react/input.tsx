import React, { useCallback } from 'react'
import '../../css/input.css'

interface InputProps {
	children: React.ReactNode

	placeholder?: string
	autofocus?: boolean
	autocomplete?: boolean
	spellcheck?: boolean

	value: string
	setValue: (value: string) => void
}

const Input = (props: InputProps) => {
	const inputId = React.useId()

	const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		props.setValue(e.target.value)
	}, [])

	return (
		<div className="input__container">
			<input
				id={inputId}
				value={props.value}
				onChange={handleInput}
				className="input__input"
				placeholder={props.placeholder}
				autoFocus={props.autofocus}
				autoComplete={String(props.autocomplete)}
				spellCheck={props.spellcheck}
			/>
			<label
				htmlFor={inputId}
				className="input__label"
			>
				{props.children}
			</label>
		</div>
	)
}

export default Input
