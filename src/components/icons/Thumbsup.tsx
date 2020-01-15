import * as React from "react";
import icon from "./icons/thumbsup.svg"
import {Icon} from "./Icon";

export const Thumbsup = (props) => {
    const {style} = props;
    return <Icon src={icon} style={style} />
};

