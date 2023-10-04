<script lang="ts">
	import Button from '$lib/svelte/button.svelte'
	import Modal from '$lib/svelte/modal.svelte'
	import Input from '$lib/svelte/input.svelte'

	export let isOpen = true
	export let width = 600
</script>

<Modal {isOpen} base_width={width}>
	<div class="input_wrapper">
		<Input placeholder="input placeholder" ableToChangeVisibility={true} />
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
