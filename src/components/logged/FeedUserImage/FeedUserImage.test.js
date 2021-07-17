import React from 'react';
import user from '@testing-library/user-event';
import { render, screen } from '../../../infra/test/testUtils';

import FeedUserImage from './index';

describe('<FeedUserImage />', () => {
  describe('renders component', () => {
    test('with initial state', () => {
      const likes = [];
      render(
        <FeedUserImage
          id="ID_TEST"
          src="https://sites.google.com/site/minhasemoco/_/rsrc/1342875510991/config/Google%20-%20Google%20Chrome.jpg"
          className="filter-1977"
          alt="test feed"
          likes={likes}
        />,
      );
      const feedImage = screen.getByRole('figure');
      expect(feedImage).not.toContainHTML('<div/>');
      //
      expect(feedImage).toMatchSnapshot();
    });
    test('clicking in a feed image to open like animation', () => {
      const likes = [{
        _id: 'ID_TEST',
        user: 'USER_TEST',
      }];
      render(
        <FeedUserImage
          id="ID_TEST"
          src="https://sites.google.com/site/minhasemoco/_/rsrc/1342875510991/config/Google%20-%20Google%20Chrome.jpg"
          className="filter-1977"
          alt="test feed"
          likes={likes}
        />,
      );
      const feedImage = screen.getByRole('figure');
      user.click(feedImage);
      const likeStatus = screen.getByText(/1/i);
      expect(likeStatus).toHaveTextContent(likes.length);
      expect(feedImage).toMatchSnapshot();
    });
  });
});
