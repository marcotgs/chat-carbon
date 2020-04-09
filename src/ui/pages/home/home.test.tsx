import React from 'react';
import configureStore from 'redux-mock-store';
import { render, cleanup } from '@testing-library/react';
import HomePage from './home';
import { Provider } from 'react-redux';
import { initialState } from 'src/store';

const mockStore = configureStore([]);

test('should render chat template', () => {
	const store = mockStore(initialState);
	const { getByTestId } = render(
		<Provider store={store}>
			<HomePage />
		</Provider>
	);
	const chatTemplateElement = getByTestId('chat-template');
	expect(chatTemplateElement).toBeInTheDocument();
});

beforeEach(() => {
	cleanup();
});
