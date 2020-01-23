import * as React from "react";
import {StyleSheet, View, Text} from "react-native";
import {typography} from "../../tokens/typography";
import {colors} from "../../tokens/colors";

const styles = StyleSheet.create({
   text: {
       color: "#032f62"
   }
});

const warnStyles = StyleSheet.create({
    text: {
        color: colors.yellow900,
    }
});

const errorStyles = StyleSheet.create({
    text: {
        color: colors.red900,
    }
});

const successStyles = StyleSheet.create({
    text: {
        color: colors.green800,
    }
});


export const FlashText = (props) => {
    const {children, style, type} = props;
    return <Text style={[
        typography.Paragraph5,
        styles.text,
        type === "warn" && warnStyles.text,
        type === "error"  && errorStyles.text,
        type === "success" && successStyles.text,
        StyleSheet.flatten(style)
    ]}>{children}</Text>
};
