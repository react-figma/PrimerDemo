import * as React from 'react';
import { TouchableHighlight } from 'react-native';
import {ToButtonProps} from "./ToButtonProps";
import {useFocus} from "../../hooks/useFocus";

export default function ToButton(props: ToButtonProps) {
    const {children, onClick} = props;
    const [isFocus, focusHandlers] = useFocus();
    return <TouchableHighlight onPress={onClick} {...focusHandlers}>{children({isFocus})}</TouchableHighlight>;
}
