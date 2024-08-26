import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './index';

describe('Modal component', () => {
  it('renders when shouldShow is true', () => {
    const handleClose = jest.fn();
    render(<Modal shouldShow={true} handleClose={handleClose}>
      <div>Modal content</div>
    </Modal>);

    expect(screen.getByText('Modal content')).toBeInTheDocument();
  });

  it('does not render when shouldShow is false', () => {
    const handleClose = jest.fn();
    render(<Modal shouldShow={false} handleClose={handleClose}>
      <div>Modal content</div>
    </Modal>);

    expect(screen.queryByText('Modal content')).toBeNull();
  });
});
