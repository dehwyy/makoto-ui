/// <reference types="svelte" />
import InputSvelte from '$lib/svelte/input.svelte';
import type { StoryObj } from '@storybook/svelte';
declare const meta: {
    component: typeof InputSvelte;
    title: string;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Input: Story;
