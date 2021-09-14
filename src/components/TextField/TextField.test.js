import React from 'react';
import user from '@testing-library/user-event';
import { render, screen } from '../TestProvider/test-utils';

import TextField from './index';

describe('<TextField />', () => {
  test('renders component', () => {
    render(
      <TextField
        placeholder="buscar posts"
        value="react"
        onChange={() => {}}
        name="busca"
        type="search"
      />,
    );
    const textField = screen.getByPlaceholderText(/buscar posts/i);
    expect(textField).toMatchSnapshot();
  });

  describe('when', () => {
    describe('user is typing', () => {
      test('the value must be updated', () => {
        const onChangeMock = jest.fn();
        render(
          <TextField
            placeholder="Buscar posts"
            value=""
            onChange={onChangeMock}
            name="busca"
            isTouched
          />,
        );

        const inputValue = screen.getByPlaceholderText(/buscar posts/i);
        user.type(inputValue, 'react');
        expect(onChangeMock).toHaveBeenCalledTimes(5);
      });
    });
  });
});
