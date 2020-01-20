import * as React from "react";
import icon from "./icons/file-directory.svg"
import {Icon} from "./Icon";

export const FileDirectory = (props) => {
    return <Icon ratio={12.0/16} src={icon} {...props} />
};

