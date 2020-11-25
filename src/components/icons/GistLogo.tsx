import * as React from "react";
import icon from "./icons/logo-gist.svg"
import {Icon} from "../../wrappers/icon/Icon";


export const GistLogo = (props) => {
    return <Icon ratio={25.0/16} src={icon} {...props} />
};

