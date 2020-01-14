import * as React from "react";
import {IPrimaryButtonCommon, PrimaryButton as PrimaryButtonPrototype} from "./PrimaryButton"
import WrapToWebButton from "../../helpers/WrapToWebButton";

const PrimaryButton = (props: {onClick?: () => void} & IPrimaryButtonCommon) => {
    const {onClick, children, ...otherProps} = props;
    return <WrapToWebButton onClick={onClick}>
        {({isHover, isFocus}) => <PrimaryButtonPrototype isFocus={isFocus} isHover={isHover} {...otherProps}>
            {children}
        </PrimaryButtonPrototype>}
    </WrapToWebButton>
};

export default PrimaryButton;
