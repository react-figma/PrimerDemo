import * as React from "react";
import icon from "./icons/file-binary.svg"
import {Icon} from "../../wrappers/icon/Icon";

export const FileBinary = (props) => {
    return <Icon ratio={12.0/16} src={icon} {...props} />
};

