import { SvelteComponent } from "svelte";
import '../../css/stars-background.css';
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type StarsBackgroundProps = typeof __propDef.props;
export type StarsBackgroundEvents = typeof __propDef.events;
export type StarsBackgroundSlots = typeof __propDef.slots;
export default class StarsBackground extends SvelteComponent<StarsBackgroundProps, StarsBackgroundEvents, StarsBackgroundSlots> {
}
export {};
