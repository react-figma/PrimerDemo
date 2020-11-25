import * as React from "react";
import icon from "./icons/repo-push.svg"
import {Icon} from "../../wrappers/icon/Icon";

export const RepoPush = (props) => {
    return <Icon ratio={12.0/16} src={icon} {...props} />
};

