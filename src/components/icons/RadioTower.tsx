import * as React from "react";
import icon from "./icons/radio-tower.svg"
import {Icon} from "./Icon";

export const RadioTower = (props) => {
    const {style} = props;
    return <Icon source={icon} style={style} />
};

