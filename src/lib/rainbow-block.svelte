<script lang="ts">
	import '../css/rainbow-block.css'
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:mousedown={(e) => e.stopPropagation()} class="modal__gradient-border">
	<slot />
</div>
