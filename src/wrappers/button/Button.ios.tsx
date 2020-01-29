import * as React from 'react';
import { TouchableHighlight } from 'react-native';
import {ButtonProps} from "./ButtonProps";
import {useFocus} from "../../hooks/useFocus";

export default function Button(props: ButtonProps) {
    const {children, onClick} = props;
    const [isFocus, focusHandlers] = useFocus();
    return <TouchableHighlight onPress={onClick} {...focusHandlers}>{children({isFocus})}</TouchableHighlight>;
}
