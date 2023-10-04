/// <reference types="svelte" />
import BlockWithContent from './block.s.svelte';
import type { StoryObj } from '@storybook/svelte';
declare const meta: {
    component: typeof BlockWithContent;
    title: string;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Input: Story;
