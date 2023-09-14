import React from 'react';
import { render } from '@testing-library/react';
import FreeLiveLessons from '../../Component/Pages/FreeLiveLessons/FreeLiveLessons.tsx';

describe('FreeLiveLessons Component', () => {
    it('should render without errors', () => {
        // Render the component
        const { getByText } = render(<FreeLiveLessons />);

        // Use assertions to verify that expected elements are in the rendered output
        expect(getByText('Speaking FREE Live Lessons!')).toBeInTheDocument();
        expect(getByText('Here is the Latest Live Lesson')).toBeInTheDocument();
        // Add more assertions as needed for other elements in your component
    });
});