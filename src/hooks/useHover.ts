import * as React from "react";

export const useHover = (): any => {
    const [isHover, setIsHover] = React.useState(false);

    const onMouseEnter = () => {
        setIsHover(true);
    };

    const onMouseLeave = () => {
        setIsHover(false);
    };

    return [isHover, {onMouseEnter, onMouseLeave}]
};
