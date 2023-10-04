import { SvelteComponent } from "svelte";
import '../../css/input-eye.css';
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type InputEyeProps = typeof __propDef.props;
export type InputEyeEvents = typeof __propDef.events;
export type InputEyeSlots = typeof __propDef.slots;
export default class InputEye extends SvelteComponent<InputEyeProps, InputEyeEvents, InputEyeSlots> {
}
export {};
