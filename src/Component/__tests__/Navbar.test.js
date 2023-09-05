import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './Navbar'; // Adjust the import path as needed

// Mock the AuthContext
jest.mock('../../Provider/AuthProvider/AuthProvider', () => ({
    AuthContext: {
        Consumer: ({ children }) => children({ user: null }), // Change this if needed
    },
}));

describe('Navbar Component', () => {
    test('renders Navbar component with default state', () => {
        render(<Navbar />);

        // Check if the Elearner text is present
        const elearnerText = screen.getByText(/Elearner/i);
        expect(elearnerText).toBeInTheDocument();

        // Check if the Home link is present
        const homeLink = screen.getByText(/Home/i);
        expect(homeLink).toBeInTheDocument();

        // Check if the Connect link is present
        const connectLink = screen.getByText(/Connect/i);
        expect(connectLink).toBeInTheDocument();

        // Check if the Sign Up button is present
        const signUpButton = screen.getByText(/Sign Up/i);
        expect(signUpButton).toBeInTheDocument();

        // Check if the Login button is present
        const loginButton = screen.getByText(/Login/i);
        expect(loginButton).toBeInTheDocument();
    });

    test('opens the mobile menu when the toggle button is clicked', () => {
        render(<Navbar />);

        // Check if the mobile menu is initially closed
        const mobileMenu = screen.queryByTestId('mobile-menu');
        expect(mobileMenu).not.toBeInTheDocument();

        // Click the toggle button
        const toggleButton = screen.getByLabelText(/Toggle Menu/i);
        fireEvent.click(toggleButton);

        // Check if the mobile menu is now open
        const mobileMenuAfterClick = screen.getByTestId('mobile-menu');
        expect(mobileMenuAfterClick).toBeInTheDocument();
    });

    test('renders authenticated user links correctly', () => {
        // Mock AuthContext for an authenticated user
        jest.mock('../Provider/AuthProvider/AuthProvider', () => ({
            AuthContext: {
                Consumer: ({ children }) => children({ user: { /* user object here */ } }),
            },
        }));

        render(<Navbar />);

        // Check if the Dictionary link is present for authenticated user
        const dictionaryLink = screen.getByText(/Dictionary/i);
        expect(dictionaryLink).toBeInTheDocument();
    });

    // You can add more test cases for other scenarios and interactions
});