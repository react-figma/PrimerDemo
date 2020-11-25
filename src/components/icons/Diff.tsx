import * as React from "react";
import icon from "./icons/diff.svg"
import {Icon} from "../../wrappers/icon/Icon";

export const Diff = (props) => {
    return <Icon ratio={13.0/16} src={icon} {...props} />
};

