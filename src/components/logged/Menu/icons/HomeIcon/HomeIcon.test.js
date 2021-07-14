import React from 'react';
/* import user from '@testing-library/user-event'; */
import { render } from '../../../../../infra/test/testUtils';

import HomeIcon from './index';

describe('<HomeIcon />', () => {
  describe('renders component', () => {
    test('with light mode', () => {
      const component = render(
        <HomeIcon
          mode="light"
        />
        ,
      );
      expect(component).toMatchSnapshot();
    });
    test('with dark mode', () => {
      const component = render(
        <HomeIcon
          mode="dark"
        />
        ,
      );
      expect(component).toMatchSnapshot();
    });
  });
});
