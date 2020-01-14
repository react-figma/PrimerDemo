import * as React from "react";

export const useFocus = (): any => {
    const [isFocus, setIsFocus] = React.useState(false);

    const onFocus = () => {
        setIsFocus(true);
    };

    const onBlur = () => {
        setIsFocus(false);
    };

    return [isFocus, {onFocus, onBlur}]
};
