import React from 'react';
import { render } from '@testing-library/react';
import Banner1 from '../Pages/Home/Banner/Banner1';

test('renders Banner1 component', () => {
    // Render the component
    const { getByText, getByAltText } = render(<Banner1 />);

    // You can write assertions here to check if the component renders correctly
    const headingElement = getByText(
        /We are Provide The best spoken english learning environment./i
    );
    const buttonElement = getByText(/Free Classes/i);
    const imageElement = getByAltText(/Banner/i);

    // Example assertions
    expect(headingElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
});
