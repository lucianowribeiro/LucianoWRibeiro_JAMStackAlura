import React from 'react';
import { render } from '../../../infra/test/testUtils';

import PostCombo from './index';

describe('<PostCombo />', () => {
  describe('renders component', () => {
    test('with props', () => {
      const likes = [
        {
          _id: 'ID_TEST',
          user: 'USER_TEST',
        },
      ];
      const component = render(
        <PostCombo
          filter="filter-1977"
          url="https://sites.google.com/site/minhasemoco/_/rsrc/1342875510991/config/Google%20-%20Google%20Chrome.jpg"
          likes={likes}
          description="some description"
          username="username"
        />,
      );

      expect(component).toMatchSnapshot();
    });
  });
});
