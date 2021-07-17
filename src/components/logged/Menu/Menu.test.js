import React from 'react';
import user from '@testing-library/user-event';
import { render, screen } from '../../../infra/test/testUtils';

import Menu from './index';

describe('<Menu />', () => {
  describe('renders component', () => {
    test('with dark theme switch theme', () => {
      const onSwitchMock = jest.fn();
      render(
        <Menu mode="dark" switchTheme={onSwitchMock} />,
      );
      const switchButton = screen.getByRole('navigation').lastChild;
      expect(switchButton).toHaveAttribute('mode', 'dark');
      user.click(switchButton);
      expect(onSwitchMock).toHaveBeenCalledTimes(1);
      //
      expect(switchButton).toMatchSnapshot();
    });
    test('with light theme and switch theme', () => {
      const onSwitchMock = jest.fn();
      render(
        <Menu mode="light" switchTheme={onSwitchMock} />,
      );
      const switchButton = screen.getByRole('navigation').lastChild;
      expect(switchButton).toHaveAttribute('mode', 'light');
      user.click(switchButton);
      expect(onSwitchMock).toHaveBeenCalledTimes(1);
      //
      expect(switchButton).toMatchSnapshot();
    });
  });
});
