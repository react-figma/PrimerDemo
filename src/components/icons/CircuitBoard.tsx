import * as React from "react";
import icon from "./icons/circuit-board.svg"
import {Icon} from "../../wrappers/icon/Icon";

export const CircuitBoard = (props) => {
    return <Icon ratio={14.0/16} src={icon} {...props} />
};

