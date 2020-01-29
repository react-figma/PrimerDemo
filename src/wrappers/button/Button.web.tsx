import * as React from 'react';
import {ButtonProps} from "./ButtonProps";
import {useFocus} from "../../hooks/useFocus";
import {useHover} from "../../hooks/useHover";

const style = {
    background: "none",
    border: "none",
    padding: 0
};

export default function Button(props: ButtonProps) {
    const {children, onClick} = props;
    const [isHover, hoverHandlers] = useHover();
    const [isFocus, focusHandlers] = useFocus();
    return <button style={style} onClick={onClick} {...hoverHandlers} {...focusHandlers}>
        {children({isHover, isFocus})}
    </button>
}
