import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import MessagesContainer from '../../molecules/messages-container/messages-container';
import MessageContainerProps from '../../molecules/messages-container/messages-container.props';
import PersonTypesEnum from './../../../constants/persons-types.enum';
import FormMessageMolecule from '../../molecules/form-message/form-message';
import PersonSwitch from './../../molecules/persons-switch/persons-switch';
import { sendMessage } from 'src/store/message/message.actions';
import MessageModel from './../../../models/message.model';

export interface ChatOrganismProps {
	messages: MessageModel[];
}

const ChatOrganism: React.SFC<ChatOrganismProps> = ({ messages }) => {
	const dispatch = useDispatch();
	const [activePerson, setActivePerson] = useState(PersonTypesEnum.PERSON_1);
	return (
		<div className="bx--grid bx--grid--full-width u-height--full bx--grid--condensed">
			<div className="bx--row">
				<div data-testid="chat-container" className="bx--col-lg-4 bx--offset-lg-6">
					<PersonSwitch
						onChange={selectedPerson => {
							setActivePerson(selectedPerson);
						}}
					/>
				</div>
			</div>
			<div className="bx--row u-height--full">
				<div data-testid="chat-container" className="bx--col-lg-8 bx--offset-lg-4">
					<MessagesContainer messages={messages} activePerson={activePerson} />
				</div>
			</div>
			<div className="bx--row">
				<div data-testid="chat-container" className="bx--col-lg-8 bx--offset-lg-4">
					<FormMessageMolecule
						onSubmit={ev => {
							ev.preventDefault();
							const messageInput = (ev.target as HTMLFormElement).elements.namedItem(
								'message'
							) as HTMLInputElement;
							dispatch(
								sendMessage({ text: messageInput.value, person: activePerson })
							);
							messageInput.value = '';
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default ChatOrganism;
