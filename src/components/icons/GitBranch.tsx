import * as React from "react";
import icon from "./icons/git-branch.svg"
import {Icon} from "../../wrappers/icon/Icon";


export const GitBranch = (props) => {
    return <Icon ratio={10.0/16} src={icon} {...props} />
};

