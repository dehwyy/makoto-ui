<script setup lang="ts">
import RainbowBlock from './rainbow-block.vue'
import '../../css/modal.css'
import { computed } from 'vue'

const props = withDefaults(
	defineProps<{
		isOpen: boolean
		close: () => void
		base_width: number
	}>(),
	{
		base_width: 300
	}
)

const w = computed(() => {
	return Math.max(props.base_width, 200) + 'ms'
})
</script>

<template>
	<section
		@mousedown="close"
		class="modal__wrapper"
	>
		<div class="size">
			<RainbowBlock>
				<slot />
				<div>
					<span
						@click="close"
						class="modal__close-button"
						>X</span
					>
				</div>
			</RainbowBlock>
		</div>
	</section>
</template>

<style>
.size {
	width: v-bind(w);
}
</style>
