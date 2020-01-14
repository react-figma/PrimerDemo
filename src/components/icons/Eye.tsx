import * as React from "react";
import icon from "./icons/eye.svg"
import {Icon} from "./Icon";

export const Eye = (props) => {
    const {style} = props;
    return <Icon source={icon} style={style} />
};

