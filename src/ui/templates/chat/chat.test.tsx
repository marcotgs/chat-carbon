import React from 'react';
import configureStore from 'redux-mock-store';
import { render, cleanup, RenderResult } from '@testing-library/react';
import ChatTemplate from './chat';
import { initialState } from 'src/store';
import { Provider } from 'react-redux';

describe('ChatTemplate', () => {
	let renderedComponent: RenderResult;
	const mockStore = configureStore([]);
	test('should render grid chat template', () => {
		const { container } = renderedComponent;
		const grid = container.querySelector('.bx--grid');
		expect(grid).toBeInTheDocument();
	});

	beforeEach(() => {
		cleanup();
		const store = mockStore(initialState);
		renderedComponent = render(
			<Provider store={store}>
				<ChatTemplate />
			</Provider>
		);
	});
});
