import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ChatTemplate from './chat';

describe('ChatTemplate', () => {
	test('should render grid chat template', () => {
		const { container } = render(<ChatTemplate />);
		const grid = container.querySelector('.bx--grid');
		expect(grid).toBeInTheDocument();
	});

	// test('should render chat', () => {
	// 	const { getByTestId } = render(<ChatTemplate />);
	// 	const tabs = getByTestId('chat-tabs-container');
	// 	const chatContainer = getByTestId('chat-tabs-container');
	// 	expect(tabs).toBeInTheDocument();
	// 	expect(chatContainer).toBeInTheDocument();
	// });

	beforeEach(() => {
		cleanup();
	});
});
