import * as React from 'react';
import PrimaryButton from "../primary-button/PrimaryButton";
import DangerButton from "../danger-button/DangerButton";
import {storiesOf} from "@storybook/react-native";
import {boolean, withKnobs, text} from "@storybook/addon-knobs";
import {defaultBackground} from "../storybook-decorators/DefaultBackground";
import { action } from '@storybook/addon-actions';
import DefaultButton from "../default-button/DefaultButton";
import OutlineButton from "../outline-button/OutlineButton";
import {RepoForked} from "../icons/RepoForked";


storiesOf('Button', module)
    .addDecorator(withKnobs)
    .addDecorator(defaultBackground)
    .add('Primary Button', () => <PrimaryButton onClick={action('click')}
            isSmall={boolean("isSmall", false)}>
            {text("children", "Primary Button")}
        </PrimaryButton>
    ).add('Danger Button', () => <DangerButton onClick={action('click')}
            isSmall={boolean("isSmall", false)}>
            {text("children", "Danger Button")}
        </DangerButton>
    ).add('Default Button', () => <DefaultButton onClick={action('click')}
                                               isSmall={boolean("isSmall", false)}>
            {text("children", "Danger Button")}
        </DefaultButton>
    ).add('Outline Button', () => <OutlineButton onClick={action('click')}
                                                 isSmall={boolean("isSmall", false)}>
        {text("children", "Danger Button")}
    </OutlineButton>
    ).add('Fork Button', () => <DefaultButton icon={<RepoForked style={{marginRight: 6}} />}>
        Fork
    </DefaultButton>);
