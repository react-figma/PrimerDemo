import * as React from "react";
import icon from "./icons/git-commit.svg"
import {Icon} from "../../wrappers/icon/Icon";

export const GitCommit = (props) => {
    return <Icon ratio={14.0/16} src={icon} {...props} />
};

