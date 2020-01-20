import * as React from "react";
import icon from "./icons/diff-added.svg"
import {Icon} from "./Icon";

export const DiffAdded = (props) => {
    return <Icon ratio={14.0/16} src={icon} {...props} />
};

