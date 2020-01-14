import * as React from "react";
import icon from "./icons/issue-closed.svg"
import {Icon} from "./Icon";

export const IssueClosed = (props) => {
    const {style} = props;
    return <Icon source={icon} style={style} />
};

