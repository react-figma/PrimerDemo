import * as React from "react";
import icon from "./icons/eye-closed.svg"
import {Icon} from "./Icon";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    icon: {
        width: 16,
        height: 14
    }
});

export const EyeClosed = (props) => {
    const {style} = props;
    return <Icon source={icon} style={[styles.icon, style]} />
};

