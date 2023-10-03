import InputSvelte from '../lib/input.svelte'
import type { Meta, StoryObj } from '@storybook/svelte'
import { userEvent, within } from '@storybook/testing-library'

const meta = {
	component: InputSvelte,
	title: 'Input'
} satisfies Meta<InputSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Input: Story = {
	render: (args) => ({
		Component: InputSvelte,
		props: args
	}),
	args: {
		placeholder: 'Placeholder',
		autocomplete: false, // @default false
		autofocus: false, // @default false
		spellcheck: false, // @default false
		value: '' // binding value
	},
	tags: ['component', 'svelte'],
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)

		const input = await canvas.findByLabelText('Placeholder', {
			selector: 'input'
		})

		await userEvent.click(input)

		await userEvent.type(input, 'writing some random text', {
			delay: 33
		})

		await userEvent.clear(input)
	}
}
