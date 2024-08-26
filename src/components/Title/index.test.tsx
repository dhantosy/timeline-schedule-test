import React from 'react';
import { render, screen } from '@testing-library/react';
import Title from './index';

describe('Title component', () => {
  it('renders the main title correctly', () => {
    const title = 'This is the main title';
    render(<Title titleMain={title} />);

    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
  });

  it('handles null or undefined mainTitle', () => {
    render(<Title />);

    const titleElement = screen.queryByText('This is the main title');
    expect(titleElement).toBeNull();
  });
});
