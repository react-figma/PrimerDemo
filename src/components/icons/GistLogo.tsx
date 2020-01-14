import * as React from "react";
import {StyleSheet} from "react-native";
import logoGist from "./icons/logo-gist.svg"
import {Icon} from "./Icon";

const styles = StyleSheet.create({
    icon: {
        width: 25,
        height: 16
    }
});

export const GistLogo = (props) => {
    const {style} = props;
    return <Icon source={logoGist} style={[styles.icon, style]} />
};

