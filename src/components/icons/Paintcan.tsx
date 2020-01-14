import * as React from "react";
import {StyleSheet} from "react-native";
import logoGist from "./icons/paintcan.svg"
import {Icon} from "./Icon";

const styles = StyleSheet.create({
    icon: {
        width: 12,
        height: 16
    }
});

export const Paintcan = (props) => {
    const {style} = props;
    return <Icon source={logoGist} style={[styles.icon, style]} />
};

