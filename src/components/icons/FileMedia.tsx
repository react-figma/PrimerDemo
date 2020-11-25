import * as React from "react";
import icon from "./icons/file-media.svg"
import {Icon} from "../../wrappers/icon/Icon";

export const FileMedia = (props) => {
    return <Icon ratio={12.0/16} src={icon} {...props} />
};

