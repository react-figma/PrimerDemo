import * as React from 'react';
import { Page, StyleSheet } from 'react-figma';
import {Styleguide10} from "./frames/styleguide-1-0/Styleguide10";
import {Styleguide20} from "./frames/styleguide-2-0/Styleguide20";
import {Styleguide30} from "./frames/styleguide-3-0/Styleguide30";
import {DefaultButton} from "./components/default-button/DefaultButton";
import {RepoForked} from "./components/icons/RepoForked";

const styles = StyleSheet.create({
    page: {
        flexDirection: "row"
    },
    frameNonFirst: {
        marginLeft: 100
    }
});

const App = () => {
    return (
        <Page isCurrent name="Styleguide" style={styles.page}>
            <DefaultButton icon={<RepoForked style={{marginRight: 6}} />}>
                Fork
            </DefaultButton>
        </Page>
    );
};

export { App };
