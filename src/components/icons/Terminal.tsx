import * as React from "react";
import icon from "./icons/terminal.svg"
import {Icon} from "../../wrappers/icon/Icon";

export const Terminal = (props) => {
    return <Icon ratio={14.0/16} src={icon} {...props} />
};

