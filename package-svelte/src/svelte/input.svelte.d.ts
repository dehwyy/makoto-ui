import { SvelteComponent } from "svelte";
import '../../css/input.css';
declare const __propDef: {
    props: {
        placeholder?: string | undefined;
        autofocus?: boolean | undefined;
        autocomplete?: boolean | undefined;
        spellcheck?: boolean | undefined;
        value?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type InputProps = typeof __propDef.props;
export type InputEvents = typeof __propDef.events;
export type InputSlots = typeof __propDef.slots;
export default class Input extends SvelteComponent<InputProps, InputEvents, InputSlots> {
}
export {};
