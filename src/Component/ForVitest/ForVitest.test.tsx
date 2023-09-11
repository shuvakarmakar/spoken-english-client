import React from 'react';
import { render } from '@testing-library/react';
import ForVitest from './ForVitest'; 


test('renders blog content correctly', () => {
    const { getByText } = render(<ForVitest />);
  
    // Assert that the component renders the title
    const titleElement = getByText('My Blog');
    expect(titleElement).toBeInTheDocument();
  
    // Assert that the component renders at least one blog post title
    const postTitleElement = getByText('Blog Post Title 1');
    expect(postTitleElement).toBeInTheDocument();
  
    // You can add more assertions for other elements if needed
  });
  