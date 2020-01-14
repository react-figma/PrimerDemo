import * as React from "react";
import icon from "./icons/git-merge.svg"
import {Icon} from "./Icon";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    icon: {
        width: 12,
        height: 16
    }
});

export const GitMerge = (props) => {
    const {style} = props;
    return <Icon source={icon} style={[styles.icon, style]} />
};

