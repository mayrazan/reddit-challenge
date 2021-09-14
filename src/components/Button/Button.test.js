import React from 'react';
import { fireEvent } from '@testing-library/dom';
import { render, screen } from '../TestProvider/test-utils';

import Button from '.';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('<Button />', () => {
  test('renders component', () => {
    render(
      <Button color="shadesPurple" fullWidth isActive>
        New
      </Button>,
    );
    const button = screen.getByText(/new/i);
    expect(button).toMatchSnapshot();
    expect(button).toBeInTheDocument();
  });

  test('calls "onClick" prop on button click', () => {
    render(<Button onClick={() => mockHistoryPush('/new')}>New</Button>);

    fireEvent.click(screen.getByRole('button'));
    expect(mockHistoryPush).toHaveBeenCalledWith('/new');
  });
});
