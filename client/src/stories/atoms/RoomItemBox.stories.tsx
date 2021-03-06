import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import RoomItemBox, { RoomItemBoxTypes } from '../../components/atoms/boxes/RoomItemBox';

export default {
  title: 'pupagoAtom/RoomItemBox',
  component: RoomItemBox,
} as Meta;

const Template: Story<RoomItemBoxTypes> = (args) => <RoomItemBox {...args} />;

export const Big = Template.bind({});
Big.args = {
  size: 'big',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};
