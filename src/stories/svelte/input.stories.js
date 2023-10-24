import InputSvelte from '$lib/svelte/input.svelte';
import { userEvent, within } from '@storybook/testing-library';
const meta = {
    component: InputSvelte,
    title: 'Input'
};
export default meta;
export const Input = {
    render: (args) => ({
        Component: InputSvelte,
        props: args
    }),
    args: {
        placeholder: 'Placeholder',
        autocomplete: false,
        autofocus: false,
        spellcheck: false,
        value: '' // binding value
    },
    tags: ['component', 'svelte'],
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const input = await canvas.findByLabelText('Placeholder', {
            selector: 'input'
        });
        await userEvent.click(input);
        await userEvent.type(input, 'writing some random text', {
            delay: 33
        });
        await userEvent.clear(input);
    }
};
//# sourceMappingURL=input.stories.js.map