import * as React from 'react';
import {TouchableNativeFeedback} from 'react-native';
import {ButtonProps} from "./ButtonProps";
import {useFocus} from "../../hooks/useFocus";

export default function Button(props: ButtonProps) {
    const {children, onClick} = props;
    const [isFocus, focusHandlers] = useFocus();
    return <TouchableNativeFeedback onPress={onClick} {...focusHandlers}>{children({isFocus})}</TouchableNativeFeedback>;
}
