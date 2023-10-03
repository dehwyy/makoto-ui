import ModalWithContent from './modal.s.svelte'
import type { Meta, StoryObj } from '@storybook/svelte'

const meta = {
	component: ModalWithContent,
	title: 'Modal'
} satisfies Meta<ModalWithContent>

export default meta
type Story = StoryObj<typeof meta>

export const Input: Story = {
	render: (args) => ({
		Component: ModalWithContent,
		props: args
	}),
	name: 'Modal',
	tags: ['component', 'svelte'],
	args: {
		isOpen: true,
		width: 500
	}
}
