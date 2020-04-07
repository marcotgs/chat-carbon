import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import PersonSwitch from './persons-switch';

describe('PersonSwitch', () => {
	test('should render `Person 1` switch component', () => {
		const { getByText } = render(<PersonSwitch onChange={() => {}} />);
		const person1Switch = getByText(/Person 1/i);

		expect(person1Switch).toBeInTheDocument();
	});

	test('should render `Person 2` switch component', () => {
		const { getByText } = render(<PersonSwitch onChange={() => {}} />);
		const person2Switch = getByText(/Person 2/i);

		expect(person2Switch).toBeInTheDocument();
	});

	test('Should button with text `Person 1` must be selected', () => {
		const { getByText } = render(<PersonSwitch onChange={() => {}} />);
		const person1Switch = getByText(/Person 1/i);

		expect(person1Switch.parentElement as HTMLElement).toHaveAttribute('aria-selected', 'true');
	});

	test('Should click button call `OnChange` function', () => {
		const onChange = jest.fn();
		const { getByText } = render(<PersonSwitch onChange={onChange} />);
		const person1Switch = getByText(/Person 1/i);

		fireEvent(
			person1Switch.parentElement as HTMLElement,
			new MouseEvent('click', {
				bubbles: true,
				cancelable: true,
			})
		);

		expect(onChange.mock.calls.length).toBe(1);
	});

	beforeEach(() => {
		cleanup();
	});
});
