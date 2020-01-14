import * as React from "react";
import icon from "./icons/workflow.svg"
import {Icon} from "./Icon";

export const Workflow = (props) => {
    const {style} = props;
    return <Icon source={icon} style={style} />
};

