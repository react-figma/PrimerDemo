import * as React from "react";
import icon from "./icons/issue-opened.svg"
import {Icon} from "./Icon";


export const IssueOpened = (props) => {
    return <Icon ratio={14.0/16} src={icon} {...props} />
};

