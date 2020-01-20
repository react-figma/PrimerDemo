import * as React from "react";
import icon from "./icons/markdown.svg"
import {Icon} from "./Icon";


export const Markdown = (props) => {
    return <Icon ratio={12.0/16} src={icon} {...props} />
};

