import * as React from 'react';
import {TouchableNativeFeedback} from 'react-native';
import {ToButtonProps} from "./ToButtonProps";
import {useFocus} from "../../hooks/useFocus";

export default function ToButton(props: ToButtonProps) {
    const {children, onClick} = props;
    const [isFocus, focusHandlers] = useFocus();
    return <TouchableNativeFeedback onPress={onClick} {...focusHandlers}>{children({isFocus})}</TouchableNativeFeedback>;
}
