import StarsBackground from '$lib/svelte/stars-background.svelte';
const meta = {
    component: StarsBackground,
    title: 'Stars Background'
};
export default meta;
export const Input = {
    render: (args) => ({
        Component: StarsBackground,
        props: args
    }),
    name: 'Stars Background',
    tags: ['component', 'svelte']
};
//# sourceMappingURL=stars-background.stories.js.map