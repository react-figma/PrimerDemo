import * as React from "react";
import icon from "./icons/rss.svg"
import {Icon} from "./Icon";

export const Rss = (props) => {
    return <Icon ratio={10.0/16} src={icon} {...props} />
};

