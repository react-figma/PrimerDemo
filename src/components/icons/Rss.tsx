import * as React from "react";
import icon from "./icons/rss.svg"
import {Icon} from "./Icon";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    icon: {
        width: 10,
        height: 16
    }
});

export const Rss = (props) => {
    const {style} = props;
    return <Icon source={icon} style={[styles.icon, style]} />
};

