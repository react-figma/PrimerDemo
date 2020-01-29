import * as React from 'react';
import {ButtonProps} from "./ButtonProps";

export default function Button(props: ButtonProps) {
    const {children} = props;
    return <>{children({})}</>;
}
