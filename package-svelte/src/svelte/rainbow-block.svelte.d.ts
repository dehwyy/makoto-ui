import { SvelteComponent } from "svelte";
import '../../css/rainbow-block.css';
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type RainbowBlockProps = typeof __propDef.props;
export type RainbowBlockEvents = typeof __propDef.events;
export type RainbowBlockSlots = typeof __propDef.slots;
export default class RainbowBlock extends SvelteComponent<RainbowBlockProps, RainbowBlockEvents, RainbowBlockSlots> {
}
export {};
