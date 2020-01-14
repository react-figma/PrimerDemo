import * as React from "react";
import {StyleSheet} from "react-figma";
import {StyleguideSeparator} from "./StyleguideSeperator";

const styles = StyleSheet.create({
    separator: {
        marginTop: 22
    }
});

export const StyleguideSeparatorWrapper = (props) => {
    return <>
        {props.children}
        <StyleguideSeparator style={styles.separator} />
    </>
};
