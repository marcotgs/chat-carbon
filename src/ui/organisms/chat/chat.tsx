import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import cx from 'classnames';
import MessagesContainer from '../../molecules/messages-container/messages-container';
import PersonTypesEnum from './../../../constants/persons-types.enum';
import FormMessageMolecule from '../../molecules/form-message/form-message';
import PersonSwitch from './../../molecules/persons-switch/persons-switch';
import { sendMessage, readMessages } from 'src/store/message/message.actions';
import MessageModel from './../../../models/message.model';
import styles from './chat.module.scss';

export interface ChatOrganismProps {
	messages: MessageModel[];
	newMessages: number;
}

const ChatOrganism: React.SFC<ChatOrganismProps> = ({ messages, newMessages }) => {
	const dispatch = useDispatch();
	const [activePerson, setActivePerson] = useState(PersonTypesEnum.PERSON_1);
	return (
		<div className="bx--grid bx--grid--full-width u-height--full bx--grid--condensed">
			<div className="bx--row">
				<div data-testid="chat-container" className="bx--col-lg-4 bx--offset-lg-6">
					<PersonSwitch
						newMessages={newMessages}
						activePerson={activePerson}
						onChange={selectedPerson => {
							dispatch(readMessages());
							setActivePerson(selectedPerson);
						}}
					/>
				</div>
			</div>
			<div className="bx--row u-height--full">
				<div
					data-testid="chat-container"
					className={cx('bx--col-lg-8 bx--offset-lg-4', styles.rowMessagesContainer)}
				>
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
