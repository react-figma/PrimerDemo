import * as React from "react";
import icon from "./icons/git-pull-request.svg"
import {Icon} from "../../wrappers/icon/Icon";

export const GitPullRequest = (props) => {
    return <Icon ratio={12.0/16} src={icon} {...props} />
};

