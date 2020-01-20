import * as React from "react";
import icon from "./icons/repo-template.svg"
import {Icon} from "./Icon";


export const RepoTemplate = (props) => {
    return <Icon ratio={14.0/16} src={icon} {...props} />
};

