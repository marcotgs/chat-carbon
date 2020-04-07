import React from 'react';
import { render, cleanup } from '@testing-library/react';
import HomePage from './home';

test('should render chat template', () => {
	const { getByTestId } = render(<HomePage />);
	const chatTemplateElement = getByTestId('chat-template');
	expect(chatTemplateElement).toBeInTheDocument();
});

beforeEach(() => {
	cleanup();
});
