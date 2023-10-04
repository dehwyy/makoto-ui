<script lang="ts">
	import EyeIcon from '../static/eye.svg'
	import { slide, fade } from 'svelte/transition'
	import { onMount } from 'svelte'
	import '../../css/input-eye.css'

	let x: number = 0
	let maxX: number = 0
	let y: number = 0
	let maxY: number = 0

	let isMounted = false
	let isEyeOpen = false

	const handleMouseMove = (e: MouseEvent) => {
		x = e.clientX + 0.1
		y = e.clientY + 0.1
	}

	onMount(() => {
		maxX = window.innerWidth
		maxY = window.innerHeight
		isMounted = true
	})

	$: eyeLeft = 45 + ((x || maxX / 2) / (maxX + 1)) * 10 + '%'
	$: eyeTop = 45 + ((y || maxY / 2) / (maxY + 1)) * 10 + '%'
</script>

<svelte:document on:mousemove={handleMouseMove} />
{#if isMounted}
	<div role="presentation" on:click={() => (isEyeOpen = !isEyeOpen)} class="input-eye__wrapper">
		<img src={EyeIcon} alt="eye" class="input-eye__eye" />
		{#if isEyeOpen}
			<div
				transition:fade={{ duration: 500 }}
				style:left={eyeLeft}
				style:top={eyeTop}
				class="input-eye__open input-eye__center-absolute"
			/>
		{:else}
			<div
				transition:fade={{ duration: 500 }}
				class="input-eye__closed-dot input-eye__center-absolute"
			/>
			<div
				transition:slide={{ duration: 500 }}
				class="input-eye__closed-line input-eye__center-absolute"
			/>
		{/if}
	</div>
{:else}
	<div class="input-eye__fallback" />
{/if}
