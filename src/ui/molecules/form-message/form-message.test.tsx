import React from 'react';
import { render, cleanup } from '@testing-library/react';
import FormMessageMolecule from './form-message';
import userEvent from '@testing-library/user-event';

describe('inputMessageMolecule', () => {
	test('should render form correctly', () => {
		const { container } = render(<FormMessageMolecule onSubmit={() => {}} />);
		const input = container.querySelector('input');
		const buttonSubmit = container.querySelector('button[type="submit"]');

		expect(input).toBeInTheDocument();
		expect(buttonSubmit).toBeInTheDocument();
	});

	test('should submit form when click button', () => {
		const onSubmitFn = jest.fn((ev: React.FormEvent) => {
			ev.preventDefault();
		});
		const { container } = render(<FormMessageMolecule onSubmit={onSubmitFn} />);
		const buttonSubmit = container.querySelector('button[type="submit"]');

		userEvent.click(buttonSubmit as HTMLElement);
		expect(onSubmitFn.mock.calls.length).toBe(1);
	});

	beforeEach(() => {
		cleanup();
	});
});
