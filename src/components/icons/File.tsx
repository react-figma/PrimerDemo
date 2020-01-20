import * as React from "react";
import icon from "./icons/file.svg"
import {Icon} from "./Icon";

export const File = (props) => {
    return <Icon ratio={12.0/16} src={icon} {...props} />
};

