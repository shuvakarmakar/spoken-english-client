import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import HeroSection from '../Pages/Home/HeroSection';

// Mock react-i18next useTranslation hook
jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: key => key }), // Mock the translation function
}));

describe('HeroSection', () => {
  it('renders correctly', () => {
    const { getByText } = render(<HeroSection />);

    // Replace these with the actual translations you expect to be in your component
    expect(getByText('hero.title')).toBeInTheDocument();
    expect(getByText('hero.description')).toBeInTheDocument();
    expect(getByText('hero.buttonText')).toBeInTheDocument();
  });

  // Add more test cases as needed
});
