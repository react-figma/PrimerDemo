import * as React from "react";
import icon from "./icons/paintcan.svg"
import {Icon} from "../../wrappers/icon/Icon";


export const Paintcan = (props) => {
    return <Icon ratio={12.0/16} src={icon} {...props} />
};

