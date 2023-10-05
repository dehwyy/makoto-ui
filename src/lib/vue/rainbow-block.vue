<script setup lang="ts">
import '../../css/rainbow-block.css'
</script>

<template>
	<div
		@mousedown.stop
		class="modal__gradient-border"
	>
		<slot />
	</div>
</template>
