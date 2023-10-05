<script setup lang="ts">
import '../../css/button.css'

defineProps<{
	onClick: () => void
}>()
</script>

<template>
	<button @click="onClick" class="button__btn">
		<span class="top-key" />
		<p class="button__text">
			<slot />
		</p>
		<span class="bottom-key-1" />
		<span class="bottom-key-2" />
	</button>
</template>
