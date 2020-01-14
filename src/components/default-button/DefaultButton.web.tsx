import * as React from "react";
import {IDefaultButtonCommon, DefaultButton as DefaultButtonPrototype} from "./DefaultButton"
import WrapToWebButton from "../../helpers/WrapToWebButton";

const DefaultButton = (props: {onClick?: () => void} & IDefaultButtonCommon) => {
    const {onClick, children, ...otherProps} = props;
    return <WrapToWebButton onClick={onClick}>
        {({isHover, isFocus}) => <DefaultButtonPrototype isHover={isHover} {...otherProps}>
            {children}
        </DefaultButtonPrototype>}
    </WrapToWebButton>
};

export default DefaultButton;
