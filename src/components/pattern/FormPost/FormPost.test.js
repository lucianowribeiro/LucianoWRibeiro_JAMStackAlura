import React from 'react';
import user from '@testing-library/user-event';
import { render, screen } from '../../../infra/test/testUtils';

import FormPost from './index';

describe('<FormPost />', () => {
  describe('renders component', () => {
    describe('with initial screen', () => {
      test('and initial state', () => {
        const imageInitial = {
          have: false,
          loading: false,
          url: '',
          ready: false,
        };
        const setImageMock = jest.fn();
        const resetPostFormMock = jest.fn();
        const onCloseMock = jest.fn();
        const component = render(
          <FormPost
            image={imageInitial}
            setImage={setImageMock}
            onClose={onCloseMock}
            resetPostForm={resetPostFormMock}
            propsModal={{
              'data-modal-safe-area': 'true',
            }}
            mode="dark"
          />,
        );
        const defaultImage = screen.getByRole('figure').firstChild;
        //
        expect(setImageMock).toHaveBeenCalledTimes(0);
        expect(resetPostFormMock).toHaveBeenCalledTimes(0);
        expect(onCloseMock).toHaveBeenCalledTimes(0);
        expect(defaultImage).toBeInTheDocument();
        //
        expect(component).toMatchSnapshot();
      });
      test('and url setted', () => {
        const imageInitial = {
          have: false,
          loading: false,
          url: '',
          ready: false,
        };
        const url = 'https://sites.google.com/site/minhasemoco/_/rsrc/1342875510991/config/Google%20-%20Google%20Chrome.jpg';
        const setImageMock = jest.fn();
        const resetPostFormMock = jest.fn();
        const onCloseMock = jest.fn();
        const component = render(
          <FormPost
            image={imageInitial}
            setImage={setImageMock}
            onClose={onCloseMock}
            resetPostForm={resetPostFormMock}
            propsModal={{
              'data-modal-safe-area': 'true',
            }}
            mode="dark"
          />,
        );
        // verify url field
        const urlField = screen.getByRole('textbox');
        user.type(urlField, url);
        expect(urlField).toHaveValue(url);
        // verify info span
        const infoSpan = screen.getByText(/formatos suportados: jpg, png, svg e xpto\./i);
        expect(infoSpan).toHaveTextContent('Formatos suportados: jpg, png, svg e xpto.');
        // verify alerts span
        const alertSpan = screen.getByText(/por favor insere uma url valida!/i);
        expect(alertSpan).toHaveTextContent('Por favor insere uma url valida!');
        // verify button
        const submitButton = screen.getByRole('button', { name: /avançar/i });
        expect(submitButton).not.toBeEnabled();
        //
        expect(setImageMock).toHaveBeenCalled();
        expect(resetPostFormMock).toHaveBeenCalledTimes(0);
        expect(onCloseMock).toHaveBeenCalledTimes(0);
        //
        expect(component).toMatchSnapshot();
      });
      test('and close form', () => {
        const imageInitial = {
          have: false,
          loading: false,
          url: '',
          ready: false,
        };
        const setImageMock = jest.fn();
        const resetPostFormMock = jest.fn();
        const onCloseMock = jest.fn();
        const component = render(
          <FormPost
            image={imageInitial}
            setImage={setImageMock}
            onClose={onCloseMock}
            resetPostForm={resetPostFormMock}
            propsModal={{
              'data-modal-safe-area': 'true',
            }}
            mode="dark"
          />,
        );
        const closeForm = screen.getByRole('article').firstChild;
        // verify close action
        expect(closeForm).toBeInTheDocument();
        user.click(closeForm);
        //
        expect(setImageMock).toHaveBeenCalledTimes(0);
        expect(resetPostFormMock).toHaveBeenCalledTimes(1);
        expect(onCloseMock).toHaveBeenCalledTimes(1);
        //
        expect(component).toMatchSnapshot();
      });
    });
  });
});
