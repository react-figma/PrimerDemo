import * as React from "react";
import {StyleSheet} from "react-native";
import logoGist from "./icons/octoface.svg"
import {Icon} from "./Icon";

const styles = StyleSheet.create({
    icon: {
        width: 16,
        height: 16
    }
});

export const Octoface = (props) => {
    const {style} = props;
    return <Icon source={logoGist} style={[styles.icon, style]} />
};

