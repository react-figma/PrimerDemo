import * as React from "react";
import icon from "./icons/organization.svg"
import {Icon} from "./Icon";

export const Organization = (props) => {
    const {style} = props;
    return <Icon source={icon} style={style} />
};

