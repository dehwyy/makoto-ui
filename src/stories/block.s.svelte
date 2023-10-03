<script lang="ts">
	import Button from '../lib/button.svelte'
	import RainbowBlock from '../lib/rainbow-block.svelte'

	export let width = 300
</script>

<div
	style={`display: grid; place-items: center; position: fixed; left: 0; top: 0; right: 0; bottom: 0`}
>
	<div style={`width: ${width}px`}>
		<RainbowBlock>
			<div class="button-wrapper">
				<Button>Button text</Button>
			</div>
		</RainbowBlock>
	</div>
</div>

<style>
	.button-wrapper {
		padding: 5rem 5rem;
		font-size: 25px;
	}
</style>
