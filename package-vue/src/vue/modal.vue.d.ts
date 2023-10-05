import '../../css/modal.css';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    isOpen: {
        type: import("vue").PropType<boolean>;
        required: true;
    };
    close: {
        type: import("vue").PropType<() => void>;
        required: true;
    };
    base_width: {
        type: import("vue").PropType<number>;
        required: true;
        default: number;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    isOpen: {
        type: import("vue").PropType<boolean>;
        required: true;
    };
    close: {
        type: import("vue").PropType<() => void>;
        required: true;
    };
    base_width: {
        type: import("vue").PropType<number>;
        required: true;
        default: number;
    };
}>>, {
    base_width: number;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
