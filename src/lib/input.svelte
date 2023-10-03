<script lang="ts">
	import '../css/input.css'
	export let placeholder = ''
	export let autofocus = false
	export let autocomplete = false
	export let spellcheck = false
	export let value = ''

	function handleInput(e: Event) {
		value = (e.target as HTMLInputElement).value
	}
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
		{placeholder}
	/>
	<label for={placeholder} class="input__label">
		{placeholder}
	</label>
</div>
