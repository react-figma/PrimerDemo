import * as React from "react";
import icon from "./icons/jersey.svg"
import {Icon} from "../../wrappers/icon/Icon";

export const Jersey = (props) => {
    return <Icon ratio={14.0/16} src={icon} {...props} />
};

