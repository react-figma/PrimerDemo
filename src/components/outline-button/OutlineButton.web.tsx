import * as React from "react";
import {IOutlineButtonCommon, OutlineButton as OutlineButtonPrototype} from "./OutlineButton"
import WrapToWebButton from "../../helpers/WrapToWebButton";

const OutlineButton = (props: {onClick?: () => void} & IOutlineButtonCommon) => {
    const {onClick, children, ...otherProps} = props;
    return <WrapToWebButton onClick={onClick}>
        {({isHover, isFocus}) => <OutlineButtonPrototype isHover={isHover} {...otherProps}>
            {children}
        </OutlineButtonPrototype>}
    </WrapToWebButton>
};

export default OutlineButton;
