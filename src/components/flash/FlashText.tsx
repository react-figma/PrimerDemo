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
    const {children, style, isWarn, isError, isSuccess} = props;
    return <Text style={[
        typography.Paragraph5,
        styles.text,
        isWarn && warnStyles.text,
        isError && errorStyles.text,
        isSuccess && successStyles.text,
        StyleSheet.flatten(style)
    ]}>{children}</Text>
};
