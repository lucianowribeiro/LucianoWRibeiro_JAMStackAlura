import React from 'react';
import { render, screen } from '../../../infra/test/testUtils';

import UserDetail from './index';

describe('<UserDetail />', () => {
  describe('renders component', () => {
    test('with props default', () => {
      const component = render(
        <UserDetail
          spacing="test"
          username="username"
          name="name"
          size="other"
        />,
      );
      // verify size and src
      const userAvatar = screen.getByRole('img', { name: /user avatar/i });
      expect(userAvatar).toHaveAttribute(
        'src',
        'https://images.unsplash.com/photo-1618678900888-da259539f5ef?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjE4NzYzMTky&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600',
      );
      expect(userAvatar).toHaveStyle({ width: '48px', height: '48px' });
      //
      expect(component).toMatchSnapshot();
    });
    test('with src setted and small size', () => {
      const component = render(
        <UserDetail
          src="https://sites.google.com/site/minhasemoco/_/rsrc/1342875510991/config/Google%20-%20Google%20Chrome.jpg"
          spacing="small"
          username="username"
          name="name"
          size="small"
        />,
      );
      // verify size and src
      const userAvatar = screen.getByRole('img', { name: /user avatar/i });
      expect(userAvatar).toHaveAttribute(
        'src',
        'https://sites.google.com/site/minhasemoco/_/rsrc/1342875510991/config/Google%20-%20Google%20Chrome.jpg',
      );
      expect(userAvatar).toHaveStyle({ width: '38.2px', height: '38.2px' });
      //
      expect(component).toMatchSnapshot();
    });
    test('with src setted and big size', () => {
      const component = render(
        <UserDetail
          src="https://sites.google.com/site/minhasemoco/_/rsrc/1342875510991/config/Google%20-%20Google%20Chrome.jpg"
          spacing="big"
          username="username"
          name="name"
          size="big"
        />,
      );
      // verify size and src
      const userAvatar = screen.getByRole('img', { name: /user avatar/i });
      expect(userAvatar).toHaveAttribute(
        'src',
        'https://sites.google.com/site/minhasemoco/_/rsrc/1342875510991/config/Google%20-%20Google%20Chrome.jpg',
      );
      expect(userAvatar).toHaveStyle({
        width: '64px',
        height: '64px',
      });
      //
      expect(component).toMatchSnapshot();
    });
  });
});
