import * as React from "react";
import icon from "./icons/dependent.svg"
import {Icon} from "./Icon";

export const Dependent = (props) => {
    const {style} = props;
    return <Icon src={icon} style={style} />
};

