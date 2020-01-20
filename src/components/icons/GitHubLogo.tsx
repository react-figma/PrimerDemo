import * as React from "react";
import icon from "./icons/logo-github.svg"
import {Icon} from "./Icon";

export const GitHubLogo = (props) => {
    return <Icon ratio={45.0/16} src={icon} {...props} />
};

