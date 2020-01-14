import * as React from "react";
import icon from "./icons/gist-secret.svg"
import {Icon} from "./Icon";

export const GistSecret = (props) => {
    const {style} = props;
    return <Icon source={icon} style={style} />
};

