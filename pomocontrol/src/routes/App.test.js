import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from "@testing-library/react";

import { App } from './App'

describe('Main Component', () => {
    it('Showed Menu', () => {
        render(<App />);
        
        expect(screen.getByText('Menu')).toBeInTheDocument();
    })
})
