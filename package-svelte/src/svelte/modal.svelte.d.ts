import { SvelteComponent } from "svelte";
import '../../css/modal.css';
declare const __propDef: {
    props: {
        isOpen: boolean;
        close?: (() => void) | undefined;
        base_width?: number | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ModalProps = typeof __propDef.props;
export type ModalEvents = typeof __propDef.events;
export type ModalSlots = typeof __propDef.slots;
export default class Modal extends SvelteComponent<ModalProps, ModalEvents, ModalSlots> {
}
export {};
