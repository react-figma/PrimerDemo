import * as React from "react";
import icon from "./icons/repo-clone.svg"
import {Icon} from "./Icon";

export const RepoClone = (props) => {
    const {style} = props;
    return <Icon source={icon} style={style} />
};

