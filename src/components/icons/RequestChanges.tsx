import * as React from "react";
import icon from "./icons/request-changes.svg"
import {Icon} from "./Icon";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    icon: {
        width: 16,
        height: 15
    }
});

export const RequestChanges = (props) => {
    const {style} = props;
    return <Icon source={icon} style={[styles.icon, style]} />
};

