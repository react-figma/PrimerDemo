import * as React from "react";
import icon from "./icons/smiley.svg"
import {Icon} from "./Icon";

export const Smiley = (props) => {
    const {style} = props;
    return <Icon source={icon} style={style} />
};

