import * as React from "react";
import icon from "./icons/hubot.svg"
import {Icon} from "../../wrappers/icon/Icon";

export const Hubot = (props) => {
    return <Icon ratio={12.0/16} src={icon} {...props} />
};

