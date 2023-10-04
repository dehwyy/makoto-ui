/// <reference types="svelte" />
import ModalWithContent from './modal.s.svelte';
import type { StoryObj } from '@storybook/svelte';
declare const meta: {
    component: typeof ModalWithContent;
    title: string;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Input: Story;
