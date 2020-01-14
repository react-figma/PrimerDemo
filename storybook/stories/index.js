import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { linkTo } from '@storybook/addon-links';

import Button from './Button';
import Welcome from './Welcome';
import Flash from "../../src/components/flash/Flash";
import {boolean, text, withKnobs} from "@storybook/addon-knobs";

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Flash', module)
    .addDecorator(withKnobs)
    .add('Flash', () => <Flash
        isWarn={boolean("isWarn", false)}
        isError={boolean("isError", false)}
        isSuccess={boolean("isSuccess", false)}>
        {text("children", "Flash message goes here.")}
    </Flash>);
