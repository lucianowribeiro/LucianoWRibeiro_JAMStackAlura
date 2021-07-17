import React from 'react';
import user from '@testing-library/user-event';
import { render, screen } from '../../../../../infra/test/testUtils';

import PostFilter from './index';

describe('<PostFilter />', () => {
  describe('renders component', () => {
    test('and select filter', () => {
      const url = 'https://sites.google.com/site/minhasemoco/_/rsrc/1342875510991/config/Google%20-%20Google%20Chrome.jpg';
      const setFilter = jest.fn();
      const resetMock = jest.fn();
      const component = render(
        <PostFilter
          url={url}
          setFilter={setFilter}
          filterType="1977"
          reset={resetMock}
        />,
      );
      // select image
      const imageSelected = screen.getByRole('img', {
        name: /filters instalura/i,
      });
      user.click(imageSelected);
      // verify post button
      const postButton = screen.getByRole('button', { name: /postar/i });
      expect(postButton).toBeEnabled();
      //
      expect(resetMock).toHaveBeenCalledTimes(0);
      expect(setFilter).toHaveBeenCalledTimes(1);
      //
      expect(component).toMatchSnapshot();
    });
  });
});
