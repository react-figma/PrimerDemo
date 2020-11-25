import * as React from "react";
import icon from "./icons/smiley.svg"
import {Icon} from "../../wrappers/icon/Icon";

export const Smiley = (props) => {
    return <Icon src={icon} {...props} />
};

