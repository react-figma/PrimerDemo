import * as React from "react";
import icon from "./icons/repo.svg"
import {Icon} from "./Icon";

export const Repo = (props) => {
    return <Icon ratio={12.0/16} src={icon} {...props} />
};

