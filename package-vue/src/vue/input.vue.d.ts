import '../../css/input.css';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    placeholder: {
        type: import("vue").PropType<string>;
        required: true;
    };
    autofocus: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    autocomplete: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    spellcheck: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    value: {
        type: import("vue").PropType<string>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:value": (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    placeholder: {
        type: import("vue").PropType<string>;
        required: true;
    };
    autofocus: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    autocomplete: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    spellcheck: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    value: {
        type: import("vue").PropType<string>;
        required: true;
    };
}>> & {
    "onUpdate:value"?: ((...args: any[]) => any) | undefined;
}, {
    autofocus: boolean;
    autocomplete: boolean;
    spellcheck: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
