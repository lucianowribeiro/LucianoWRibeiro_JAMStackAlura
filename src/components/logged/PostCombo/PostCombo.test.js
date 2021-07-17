import React from 'react';
import user from '@testing-library/user-event';
import { render, screen } from '../../../infra/test/testUtils';

import PostCombo from './index';

describe('<PostCombo />', () => {
  describe('renders component', () => {
    test('with props', () => {
      render(
        <PostCombo likes={[]} description="" filter="" url="" />,
      );
    });
  });
});
