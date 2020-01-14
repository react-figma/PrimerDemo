import * as React from "react";
import {StyleSheet} from "react-native";
import logoGist from "./icons/logo-github.svg"
import {Icon} from "./Icon";

const styles = StyleSheet.create({
    icon: {
        width: 45,
        height: 16
    }
});

export const GitHubLogo = (props) => {
    const {style} = props;
    return <Icon source={logoGist} style={[styles.icon, style]} />
};

