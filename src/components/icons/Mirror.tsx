import * as React from "react";
import icon from "./icons/mirror.svg"
import {Icon} from "./Icon";

export const Mirror = (props) => {
    const {style} = props;
    return <Icon source={icon} style={style} />
};

