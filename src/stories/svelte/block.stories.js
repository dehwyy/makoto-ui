import BlockWithContent from './block.s.svelte';
const meta = {
    component: BlockWithContent,
    title: 'Block'
};
export default meta;
export const Input = {
    render: (args) => ({
        Component: BlockWithContent,
        props: args
    }),
    name: 'Block',
    tags: ['component', 'svelte'],
    args: {
        width: 500
    }
};
//# sourceMappingURL=block.stories.js.map