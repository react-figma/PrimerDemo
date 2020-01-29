import * as React from "react";

export interface ButtonProps {
    onClick?: () => void,
    children: (callback: {isHover?: boolean, isFocus?: boolean}) => React.ReactNode
}
