import React from 'react';
/* import user from '@testing-library/user-event'; */
import { render } from '../../../infra/test/testUtils';

import Menu from './index';

describe('<HomeIcon />', () => {
  test('renders component', () => {
    const component = render(
      <Menu mode="light" switchTheme={()=> 'teste'} />,
    );
    expect(component).toMatchSnapshot();
  });
});
