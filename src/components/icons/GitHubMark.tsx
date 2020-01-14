import * as React from "react";
import {StyleSheet} from "react-native";
import logoGist from "./icons/mark-github.svg"
import {Icon} from "./Icon";

const styles = StyleSheet.create({
    icon: {
        width: 16,
        height: 16
    }
});

export const GitHubMark = (props) => {
    const {style} = props;
    return <Icon source={logoGist} style={[styles.icon, style]} />
};

