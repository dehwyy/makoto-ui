import type Block from './block.s.svelte'
import BlockWithContent from './block.s.svelte'
import type { Meta, StoryObj } from '@storybook/svelte'

const meta = {
	component: BlockWithContent,
	title: 'Block'
} satisfies Meta<Block>

export default meta
type Story = StoryObj<typeof meta>

export const Input: Story = {
	render: (args) => ({
		Component: BlockWithContent,
		props: args
	}),
	name: 'Block',
	tags: ['component', 'svelte'],
	args: {
		width: 500
	}
}
