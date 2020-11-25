import * as React from "react";
import icon from "./icons/repo-forked.svg"
import {Icon} from "../../wrappers/icon/Icon";

export const RepoForked = (props) => {
    return <Icon ratio={10.0/16} src={icon} {...props} />
};

