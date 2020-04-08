import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Message from './message';
import MessageSidesEnum from '../../../constants/message-sides.enum';
import style from './message.module.scss';

describe('MessageAtom', () => {
	test('should render message text', () => {
		const expectedMessage = 'text message';
		const { getByText } = render(<Message>{expectedMessage}</Message>);
		const messageText = getByText(expectedMessage, { exact: true }).textContent;
		expect(messageText).toBe(messageText);
	});

	test('should render left message', () => {
		const expectedMessage = 'text message';
		const side = MessageSidesEnum.LEFT;
		const { getByText } = render(<Message side={side}>{expectedMessage}</Message>);
		const messageText = getByText(expectedMessage, { exact: true });
		expect(messageText).toHaveClass(style.messageLeft);
	});

	beforeEach(() => {
		cleanup();
	});
});
