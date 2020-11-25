import * as React from "react";
import icon from "./icons/gist.svg"
import {Icon} from "../../wrappers/icon/Icon";

export const Gist = (props) => {
    return <Icon ratio={12.0/16} src={icon} {...props} />
};

