import React from 'react';
import user from '@testing-library/user-event';
import { render, screen } from '../../../infra/test/testUtils';

import Menu from './index';

describe('<HomeIcon />', () => {
  describe('renders component', () => {
    test('with dark theme', () => {
      const onSwitchMock = jest.fn();
      render(
        <Menu mode="dark" switchTheme={onSwitchMock} />,
      );
      const switchButton = screen.getByRole('navigation').lastChild;
      user.click(switchButton);
      expect(onSwitchMock).toHaveBeenCalledTimes(1);
      expect(switchButton).toMatchSnapshot();
    });
    test('with light theme', () => {
      const onSwitchMock = jest.fn();
      render(
        <Menu mode="light" switchTheme={onSwitchMock} />,
      );
      const switchButton = screen.getByRole('navigation').lastChild;
      user.click(switchButton);
      expect(onSwitchMock).toHaveBeenCalledTimes(1);
      expect(switchButton).toMatchSnapshot();
    });
  });
});
