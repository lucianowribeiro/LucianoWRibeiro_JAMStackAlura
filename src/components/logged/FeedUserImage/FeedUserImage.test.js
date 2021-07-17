import React from 'react';
import user from '@testing-library/user-event';
import { render, screen } from '../../../infra/test/testUtils';

import FeedUserImage from './index';

describe('<FeedUserImage />', () => {
  describe('renders component', () => {
    test('with props', () => {
      render(
        <FeedUserImage id="" src="" className="" alt="" />,
      );
    });
  });
});
