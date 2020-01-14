import * as React from "react";
import {IDangerButtonCommon, DangerButton as DangerButtonPrototype} from "./DangerButton"
import WrapToWebButton from "../../helpers/WrapToWebButton";

const DangerButton = (props: {onClick?: () => void} & IDangerButtonCommon) => {
    const {onClick, children, ...otherProps} = props;
    return <WrapToWebButton onClick={onClick}>
        {({isHover, isFocus}) => <DangerButtonPrototype isHover={isHover} {...otherProps}>
            {children}
        </DangerButtonPrototype>}
    </WrapToWebButton>
};

export default DangerButton;
