import React, { useCallback } from 'react';
import '../../css/input.css';
var Input = function (props) {
    var inputId = React.useId();
    var handleInput = useCallback(function (e) {
        props.setValue(e.target.value);
    }, []);
    return (React.createElement("div", { className: "input__container" },
        React.createElement("input", { id: inputId, value: props.value, onChange: handleInput, className: "input__input", placeholder: props.placeholder, autoFocus: props.autofocus, autoComplete: String(props.autocomplete), spellCheck: props.spellcheck }),
        React.createElement("label", { htmlFor: inputId, className: "input__label" }, props.children)));
};
export default Input;
