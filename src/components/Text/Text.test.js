import React from 'react';
import { render, screen } from '../TestProvider/test-utils';
import Text from '.';

describe('<Text />', () => {
  test('render component with props', () => {
    render(
      <Text tag="a" variant="title" color="contrastText" href="/" bold>
        Home
      </Text>,
    );
    const text = screen.getByRole('link', {
      name: /home/i,
    });
    expect(text).toMatchSnapshot();
  });

  test('render component', () => {
    render(<Text>Home</Text>);

    const text = screen.getByText(/home/i);
    expect(text).toMatchSnapshot();
  });
});
