import React from 'react';
import '../../css/input.css';
interface InputProps {
    children: React.ReactNode;
    placeholder?: string;
    autofocus?: boolean;
    autocomplete?: boolean;
    spellcheck?: boolean;
    value: string;
    setValue: (value: string) => void;
}
declare const Input: (props: InputProps) => React.JSX.Element;
export default Input;
