import * as React from "react";
import icon from "./icons/repo-pull.svg"
import {Icon} from "./Icon";

export const RepoPull = (props) => {
    const {style} = props;
    return <Icon src={icon} style={style} />
};

