import * as React from "react";
import icon from "./icons/diff-removed.svg"
import {Icon} from "./Icon";

export const DiffRemoved = (props) => {
    return <Icon ratio={14.0/16} src={icon} {...props} />
};

