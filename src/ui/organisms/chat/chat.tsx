import React from 'react';
import MessagesContainer from '../../molecules/messages-container/messages-container';
import MessageContainerProps from '../../molecules/messages-container/messages-container.props';
import PersonTypesEnum from './../../../constants/persons-types.enum';
import FormMessageMolecule from '../../molecules/form-message/form-message';
import PersonSwitch from './../../molecules/persons-switch/persons-switch';

const ChatOrganism = () => {
	const props: MessageContainerProps = {
		messages: [
			{ text: 'text', person: PersonTypesEnum.PERSON_1 },
			{ text: 'text1', person: PersonTypesEnum.PERSON_2 },
		],
		activePerson: PersonTypesEnum.PERSON_1,
	};
	return (
		<div className="bx--grid bx--grid--full-width u-height--full bx--grid--condensed">
			<div className="bx--row">
				<div data-testid="chat-container" className="bx--col-lg-4 bx--offset-lg-6">
					<PersonSwitch onChange={() => {}} />
				</div>
			</div>
			<div className="bx--row u-height--full">
				<div data-testid="chat-container" className="bx--col-lg-8 bx--offset-lg-4">
					<MessagesContainer {...props} />
				</div>
			</div>
			<div className="bx--row">
				<div data-testid="chat-container" className="bx--col-lg-8 bx--offset-lg-4">
					<FormMessageMolecule onSubmit={() => {}} />
				</div>
			</div>
		</div>
	);
};

export default ChatOrganism;
