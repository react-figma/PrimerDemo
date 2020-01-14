import * as React from "react";
import icon from "./icons/keyboard.svg"
import {Icon} from "./Icon";

export const Keyboard = (props) => {
    const {style} = props;
    return <Icon source={icon} style={style} />
};

