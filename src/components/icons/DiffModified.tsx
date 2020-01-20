import * as React from "react";
import icon from "./icons/diff-modified.svg"
import {Icon} from "./Icon";

export const DiffModified = (props) => {
    return <Icon ratio={14.0/16} src={icon} {...props} />
};

