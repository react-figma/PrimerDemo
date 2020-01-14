import * as React from 'react';
import {ToButtonProps} from "./ToButtonProps";

export default function ToButton(props: ToButtonProps) {
    const {children} = props;
    return <>{children({})}</>;
}
