import * as React from "react";
import icon from "./icons/no-newline.svg"
import {Icon} from "./Icon";

export const NoNewLine = (props) => {
    const {style} = props;
    return <Icon source={icon} style={style} />
};

