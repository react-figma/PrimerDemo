import * as React from 'react';
import DangerButton from "./DangerButton.web";
import {storiesOf} from "@storybook/react";
import {boolean, withKnobs, text} from "@storybook/addon-knobs";
import { withInfo } from '@storybook/addon-info';
import {defaultBackground} from "../storybook-decorators/DefaultBackground";


storiesOf('Button', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .addDecorator(defaultBackground)
    .add('Danger Button', () => <DangerButton
        isSmall={boolean("isSmall", false)}>
        {text("children", "Danger Button")}
    </DangerButton>);
