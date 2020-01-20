import * as React from "react";
import icon from "./icons/eye-closed.svg"
import {Icon} from "./Icon";

export const EyeClosed = (props) => {
    return <Icon ratio={16.0/14} src={icon} {...props} />
};

