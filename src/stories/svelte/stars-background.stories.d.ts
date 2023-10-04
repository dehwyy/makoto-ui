/// <reference types="svelte" />
import StarsBackground from '$lib/svelte/stars-background.svelte';
import type { StoryObj } from '@storybook/svelte';
declare const meta: {
    component: typeof StarsBackground;
    title: string;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Input: Story;
