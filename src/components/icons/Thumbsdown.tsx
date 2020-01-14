import * as React from "react";
import icon from "./icons/thumbsdown.svg"
import {Icon} from "./Icon";

export const Thumbsdown = (props) => {
    const {style} = props;
    return <Icon source={icon} style={style} />
};

