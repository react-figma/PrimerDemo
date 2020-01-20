import * as React from "react";
import icon from "./icons/person.svg"
import {Icon} from "./Icon";

export const Person = (props) => {
    return <Icon ratio={12.0/16} src={icon} {...props} />
};

