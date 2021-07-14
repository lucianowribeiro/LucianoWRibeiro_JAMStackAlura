import React from 'react';
/* import user from '@testing-library/user-event'; */
import { render } from '../../../../../infra/test/testUtils';

import SearchIcon from './index';

describe('<HomeIcon />', () => {
  test('renders component', () => {
    const component = render(
      <SearchIcon
        mode="dark"
      />
      ,
    );
    expect(component).toMatchSnapshot();
  });
});
