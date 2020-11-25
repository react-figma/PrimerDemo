import * as React from "react";
import icon from "./icons/server.svg"
import {Icon} from "../../wrappers/icon/Icon";

export const Server = (props) => {
    return <Icon ratio={12.0/16} src={icon} {...props} />
};

