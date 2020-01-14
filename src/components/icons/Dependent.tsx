import * as React from "react";
import icon from "./icons/dependent.svg"
import {Icon} from "./Icon";

export const Dependent = (props) => {
    const {style} = props;
    return <Icon source={icon} style={style} />
};

