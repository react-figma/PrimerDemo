import * as React from "react";

import {useHover} from "../hooks/useHover";
// @ts-ignore
import "./button.css";
import {useFocus} from "../hooks/useFocus";

const WrapToWebButton = (props: {
    onClick?: () => void,
    children: (callback: {isHover?: boolean, isFocus?: boolean}) => React.ReactNode
}) => {
    const {children, onClick} = props;
    const [isHover, hoverHandlers] = useHover();
    const [isFocus, focusHandlers] = useFocus();
    return <button className="button" onClick={onClick} {...hoverHandlers} {...focusHandlers}>
        {children({isHover, isFocus})}
    </button>
};

export default WrapToWebButton;
