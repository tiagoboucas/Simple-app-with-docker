import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CustomDropdown from '../components/CustomDropdown';
import { fetchColors } from '../api/api';

const mockColorsResponse = {
      items: [
        { name: 'Red', rgb: '#FF0000' },
        { name: 'Blue', rgb: '#0000FF' },
      ],
    };

jest.mock('../api/api', () => ({
  fetchColors: jest.fn(() => Promise.resolve(mockColorsResponse)),
}));

jest.mock('../stores/ColorStore', () => ({
  __esModule: true,
  default: {
    colors: [],
    setColorByIndex: jest.fn(),
  },
}));

describe('CustomDropdown component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    const mockColorsResponse = {
      items: [
        { name: 'Red', rgb: '#FF0000' },
        { name: 'Blue', rgb: '#0000FF' },
      ],
    };
    (fetchColors as jest.Mock).mockResolvedValueOnce(mockColorsResponse);
  });


  it('renders with placeholder text', () => {
    render(<CustomDropdown number={0} />);
    expect(screen.getByPlaceholderText('')).toBeInTheDocument();
  });

  it('updates search value on input change', async () => {
    render(<CustomDropdown number={0} />);
    const input = screen.getByPlaceholderText('');
    fireEvent.change(input, { target: { value: 'red' } });
    expect(input).toHaveValue('red');
  });

  it('displays color options on input focus', async () => {
    render(<CustomDropdown number={0} />);
    const input = screen.getByTestId('custom-input');
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: 're' } });
    await screen.findByText('Red');
    expect(screen.getByText('Red')).toBeInTheDocument();
  });
});
