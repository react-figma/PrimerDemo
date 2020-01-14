import * as React from "react";
import icon from "./icons/diff.svg"
import {Icon} from "./Icon";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    icon: {
        width: 13,
        height: 16
    }
});

export const Diff = (props) => {
    const {style} = props;
    return <Icon source={icon} style={[styles.icon, style]} />
};

