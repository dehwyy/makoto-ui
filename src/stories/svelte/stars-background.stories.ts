import StarsBackground from '$lib/svelte/stars-background.svelte'
import type { Meta, StoryObj } from '@storybook/svelte'

const meta = {
	component: StarsBackground,
	title: 'Stars Background'
} satisfies Meta<StarsBackground>

export default meta
type Story = StoryObj<typeof meta>

export const Input: Story = {
	render: (args) => ({
		Component: StarsBackground,
		props: args
	}),
	name: 'Stars Background',
	tags: ['component', 'svelte']
}
