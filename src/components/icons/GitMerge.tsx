import * as React from "react";
import icon from "./icons/git-merge.svg"
import {Icon} from "../../wrappers/icon/Icon";

export const GitMerge = (props) => {
    return <Icon ratio={12.0/16} src={icon} {...props} />
};

