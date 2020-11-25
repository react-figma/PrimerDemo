import * as React from "react";
import icon from "./icons/issue-closed.svg"
import {Icon} from "../../wrappers/icon/Icon";

export const IssueClosed = (props) => {
    return <Icon src={icon} {...props} />
};

