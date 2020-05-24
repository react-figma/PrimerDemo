import * as React from "react";
import {StyleSheet, Frame, View, Text} from "react-figma";
import {StyleguideLabel} from "../../components/styleguide-label/StyleguideLabel";
import {StyleguideSeparator} from "../../components/styleguide-separator/StyleguideSeperator";
import {colors} from "../../tokens/colors";
import {StyleguideColor} from "../../components/styleguide-color/StyleguideColor";
import {styleguideTypography} from "../../components/styleguide-typography/styleguideTypography";
import {StyleguideFont} from "../../components/styleguide-font/StyleguideFont";
import {TypographyContainer} from "../../components/styleguide-typography/TypographyContainer";
import {typography} from "../../tokens/typography";
import {spacingScale} from "../../tokens/spacingScale";
import {StyleguideSpacer} from "../../components/styleguide-spacer/StyleguideSpacer";

const styles = StyleSheet.create({
    frame: {
        paddingTop: 82,
        paddingLeft: 195,
        paddingRight: 195,
        paddingBottom: 82
    },
    colorsContainer: {
        maxWidth: 1040,
        flexDirection: "row",
        marginTop: 35,
        flexWrap: "wrap"
    },
    colorWrapper: {
        marginRight: 36,
        marginTop: 18
    },
    separator: {
        marginTop: 22
    },
    fontsContainer: {
        flexDirection: "row"
    },
    fontWrapper: {
        marginLeft: 105
    },
    typographyWrapper: {
        marginTop: 35
    },
    typographyContainer: {
        marginTop: 40
    },
    spacersContainer: {
        flexDirection: "row",
        marginTop: 35
    },
    spacerWrapper: {
        marginRight: spacingScale.spacer4
    },
});

export const Styleguide10 = (props) => {
    return <Frame name="Styleguide 1-0" style={[styles.frame, props.style]}>
        <View style={{marginTop: 77}}>
            <StyleguideLabel text="Colors" />
            <StyleguideSeparator style={styles.separator} />
            <View style={styles.colorsContainer}>
                <StyleguideColor name="gray" color={colors.gray} style={styles.colorWrapper} />
                <StyleguideColor name="blue" color={colors.blue} style={styles.colorWrapper} />
                <StyleguideColor name="green" color={colors.green} style={styles.colorWrapper} />
                <StyleguideColor name="purple" color={colors.purple} style={styles.colorWrapper} />
                <StyleguideColor name="yellow" color={colors.yellow} style={styles.colorWrapper} />
                <StyleguideColor name="orange" color={colors.orange} style={styles.colorWrapper} />
                <StyleguideColor name="red" color={colors.red} style={styles.colorWrapper} />
                <StyleguideColor name="pink" color={colors.pink} style={styles.colorWrapper} />
                <StyleguideColor name="black" color={colors.black} style={styles.colorWrapper} />
                <StyleguideColor name="white" withBorder color={colors.white} style={styles.colorWrapper} />
            </View>
        </View>
        <View style={{marginTop: 77}}>
            <StyleguideLabel text="Spacers" />
            <StyleguideSeparator style={styles.separator} />
            <View style={styles.spacersContainer}>
                {Object.keys(spacingScale).map((name) => <StyleguideSpacer
                    name={name}
                    size={spacingScale[name]}
                    style={styles.spacerWrapper}
                />)}
            </View>
        </View>
        <View style={{marginTop: 106}}>
            <StyleguideLabel text="Fonts" />
            <StyleguideSeparator style={styles.separator} />
            <View style={styles.typographyWrapper}>
                <TypographyContainer
                    label={<Text style={styleguideTypography.label}>H1/left</Text>}
                    typography={<Text style={[typography.HeadingH1, {color: "#000000", width: 460}]}>Sample text</Text>} />
                <TypographyContainer
                    style={styles.typographyContainer}
                    label={<Text style={styleguideTypography.label}>H2/left</Text>}
                    typography={<Text style={[typography.HeadingH2, {color: "#000000", width: 460}]}>Sample text</Text>} />
                <TypographyContainer
                    style={styles.typographyContainer}
                    label={<Text style={styleguideTypography.label}>H3/left</Text>}
                    typography={<Text style={[typography.HeadingH3, {color: "#000000"}]}>Sample text</Text>} />
                <TypographyContainer
                    style={styles.typographyContainer}
                    label={<Text style={styleguideTypography.label}>H4/left</Text>}
                    typography={<Text style={[typography.HeadingH4, {color: "#000000"}]}>Sample text</Text>} />
                <TypographyContainer
                    style={styles.typographyContainer}
                    label={<Text style={styleguideTypography.label}>H5/left</Text>}
                    typography={<Text style={[typography.HeadingH5,{color: "#000000"}]}>Sample text</Text>} />
                <TypographyContainer
                    style={styles.typographyContainer}
                    label={<Text style={styleguideTypography.label}>H6/left</Text>}
                    typography={<Text style={[typography.HeadingH6, {color: "#000000"}]}>Sample text</Text>} />

                <TypographyContainer
                    style={styles.typographyContainer}
                    label={<Text style={styleguideTypography.label}>P1/left</Text>}
                    typography={<Text style={[typography.Paragraph1, {color: "#000000", width: 460}]}>Sample text</Text>} />
                <TypographyContainer
                    style={styles.typographyContainer}
                    label={<Text style={styleguideTypography.label}>P2/left</Text>}
                    typography={<Text style={[typography.Paragraph2, {color: "#000000", width: 460}]}>Sample text</Text>} />
                <TypographyContainer
                    style={styles.typographyContainer}
                    label={<Text style={styleguideTypography.label}>P3/left</Text>}
                    typography={<Text style={[typography.Paragraph3, {color: "#000000"}]}>Sample text</Text>} />
                <TypographyContainer
                    style={styles.typographyContainer}
                    label={<Text style={styleguideTypography.label}>P4/left</Text>}
                    typography={<Text style={[typography.Paragraph4, {color: "#000000"}]}>Sample text</Text>} />
                <TypographyContainer
                    style={styles.typographyContainer}
                    label={<Text style={styleguideTypography.label}>P5/left</Text>}
                    typography={<Text style={[typography.Paragraph5, {color: "#000000"}]}>Sample text</Text>} />
                <TypographyContainer
                    style={styles.typographyContainer}
                    label={<Text style={styleguideTypography.label}>P6/left</Text>}
                    typography={<Text style={[typography.Paragraph6, {color: "#000000"}]}>Sample text</Text>} />
            </View>
        </View>
    </Frame>
};
