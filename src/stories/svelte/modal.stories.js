import ModalWithContent from './modal.s.svelte';
const meta = {
    component: ModalWithContent,
    title: 'Modal'
};
export default meta;
export const Input = {
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
};
//# sourceMappingURL=modal.stories.js.map