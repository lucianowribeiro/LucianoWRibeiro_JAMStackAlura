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
      user.click(screen.getByRole('button'));
      expect(onSwitchMock).toHaveBeenCalledTimes(1);
    });
    test('with light theme', () => {
      const component = render(
        <Menu mode="light" switchTheme={() => 'teste'} />,
      );
      expect(component).toMatchSnapshot();
    });
  });
});
