import * as React from "react";

export interface ToButtonProps {
    onClick?: () => void,
    children: (callback: {isHover?: boolean, isFocus?: boolean}) => React.ReactNode
}
