import React from 'react';
import { render, cleanup } from '@testing-library/react';
import MessagesContainer from './messages-container';
import MessageContainerProps from './messages-container.props';
import PersonTypesEnum from '../../../constants/persons-types.enum';

describe('MessagesContainer', () => {
	test('should render messages', () => {
		const props: MessageContainerProps = {
			messages: [
				{ text: 'hi', person: PersonTypesEnum.PERSON_2 },
				{ text: 'hello', person: PersonTypesEnum.PERSON_1 },
			],
			activePerson: PersonTypesEnum.PERSON_1,
		};
		const { getByText } = render(<MessagesContainer {...props} />);
		const messagePerson2 = getByText(props.messages[0].text);
		const messagePerson1 = getByText(props.messages[1].text);

		expect(messagePerson2).toBeInTheDocument();
		expect(messagePerson1).toBeInTheDocument();
	});

	beforeEach(() => {
		cleanup();
	});
});
