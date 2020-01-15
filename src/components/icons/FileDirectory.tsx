import * as React from "react";
import icon from "./icons/file-directory.svg"
import {Icon} from "./Icon";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    icon: {
        width: 14,
        height: 16
    }
});

export const FileDirectory = (props) => {
    const {style} = props;
    return <Icon src={icon} style={[styles.icon, style]} />
};

