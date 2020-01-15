import * as React from "react";
import icon from "./icons/workflow.svg"
import {Icon} from "./Icon";

export const Workflow = (props) => {
    const {style} = props;
    return <Icon src={icon} style={style} />
};

