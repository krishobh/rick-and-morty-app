import { render, screen } from '@testing-library/react';
import ActivityLoader from '../components/ActivityLoader';

test('renders activity spin', () => {
    render(<ActivityLoader />);
    const linkElement = screen.getByText(/Loading characters/i);
    expect(linkElement).toBeInTheDocument();
});