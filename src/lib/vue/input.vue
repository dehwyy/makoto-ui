<script lang="ts" setup>
import '../../css/input.css'

withDefaults(
	defineProps<{
		placeholder: string
		autofocus: boolean
		autocomplete: boolean
		spellcheck: boolean
		value: string
	}>(),
	{
		autofocus: false,
		autocomplete: false,
		spellcheck: false
	}
)

defineEmits(['update:value'])
</script>

<template>
	<div class="input__container">
		<input
			class="input__input"
			:value="value"
			@input="$emit('update:value', ($event.target as HTMLInputElement).value)"
			:autofocus="autofocus"
			:autocomplete="autocomplete ? 'on' : 'off'"
			:spellcheck="spellcheck ? 'true' : 'false'"
			:id="placeholder"
			:placeholder="placeholder"
		/>
		<label
			:for="placeholder"
			class="input__label"
		>
			<slot />
		</label>
	</div>
</template>
