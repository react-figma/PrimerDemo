import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { linkTo } from '@storybook/addon-links';

import Button from './Button';
import Welcome from './Welcome';
import Flash from "../../src/components/flash/Flash";

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Flash', module)
    .add('Flash', () => <Flash>
        Flash message goes here
    </Flash>);
