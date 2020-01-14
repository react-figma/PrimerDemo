import * as React from "react";
import {StyleSheet, View} from "react-native";

export const styles = StyleSheet.create({
    main: {
        padding: 50,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

export const defaultBackground = story => <View style={styles.main}>{story()}</View>
