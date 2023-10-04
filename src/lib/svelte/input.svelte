<script lang="ts">
	import '../../css/input.css'
	import InputEye from './input-eye.svelte'
	export let placeholder = ''
	export let autofocus = false
	export let autocomplete = false
	export let spellcheck = false
	export let value = ''
	export let ableToChangeVisibility: boolean = false
	export let isPasswordType: boolean = false

	let isHidePassword: boolean = true

	function handleInput(e: Event) {
		value = (e.target as HTMLInputElement).value
	}

	$: inputType = ableToChangeVisibility && isHidePassword ? 'password' : 'text'
</script>

<div class="input__container">
	<!-- svelte-ignore a11y-autofocus -->
	<input
		{value}
		{autofocus}
		on:input={handleInput}
		class="input__input"
		autocomplete={autocomplete ? 'on' : 'off'}
		spellcheck={spellcheck ? 'true' : 'false'}
		id={placeholder}
		type={isPasswordType ? 'password' : inputType}
		{placeholder}
	/>
	{#if ableToChangeVisibility}
		<div
			role="presentation"
			class="input__eye-icon"
			on:click={() => (isHidePassword = !isHidePassword)}
		>
			<InputEye />
		</div>
	{/if}
	<label for={placeholder} class="input__label">
		<slot />
	</label>
</div>
