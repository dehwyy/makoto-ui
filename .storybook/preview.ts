import type { Preview } from '@storybook/svelte'

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		backgrounds: {
			default: 'darkk',
			values: [
				{
					name: 'darkk',
					value: '#000000'
				}
			]
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/
			}
		}
	}
}

export default preview
