import React from 'react';
import user from '@testing-library/user-event';
import { render, screen } from '../../../infra/test/testUtils';

import FormPost from './index';

describe('<UserDetail />', () => {
  describe('renders component', () => {
    test('with props', () => {
      render(
        <FormPost image=""
        setImage=""
        resetPostForm=""
        onClose=""
        propsModal=""
        mode="" />,
      );
    });
  });
});
