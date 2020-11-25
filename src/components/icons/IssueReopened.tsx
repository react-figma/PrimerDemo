import * as React from "react";
import icon from "./icons/issue-reopened.svg"
import {Icon} from "../../wrappers/icon/Icon";

export const IssueReopened = (props) => {
    return <Icon ratio={14.0/16} src={icon} {...props} />
};

