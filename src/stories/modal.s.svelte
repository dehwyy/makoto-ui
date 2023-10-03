<script lang="ts">
	import Button from './../lib/button.svelte'
	import Modal from './../lib/modal.svelte'
	import Input from './../lib/input.svelte'

	export let isOpen = true
	export let width = 600
</script>

<Modal {isOpen} base_width={width}>
	<div class="input_wrapper">
		<Input placeholder="input placeholder" />
		<Button>Button text</Button>
	</div>
</Modal>

<style>
	.input_wrapper {
		padding: 2rem;
		font-size: 20px;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
</style>
