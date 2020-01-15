import * as React from "react";
import icon from "./icons/issue-closed.svg"
import {Icon} from "./Icon";

export const IssueClosed = (props) => {
    const {style} = props;
    return <Icon src={icon} style={style} />
};

