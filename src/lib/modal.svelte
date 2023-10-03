<script lang="ts">
	import RainbowBlock from './rainbow-block.svelte'
	import '../css/modal.css'

	export let isOpen: boolean
	export let close = () => {}
	export let base_width = 300
</script>

<svelte:body on:keydown={(e) => e.key === 'Escape' && isOpen && close()} />

{#if isOpen}
	<!-- svelte-ignore a11y-no-static-element-interactions a11y-click-events-have-key-events -->
	<section on:mousedown={close} class="modal__wrapper">
		<div style={`width: ${Math.max(base_width, 200)}px;`}>
			<RainbowBlock>
				<slot />
				<div>
					<span on:click={close} class="modal__close-button">X</span>
				</div>
			</RainbowBlock>
		</div>
	</section>
{/if}
