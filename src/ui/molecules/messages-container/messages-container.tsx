import React from 'react';
import styles from './messages-container.module.scss';
import MessageContainerProps from './messages-container.props';
import Message from '../../atoms/message/message';
import MessageSidesEnum from '../../../constants/message-sides.enum';

const MessagesContainer: React.StatelessComponent<MessageContainerProps> = props => {
	const { messages, activePerson } = props;
	return (
		<div className={`u-height--full ${styles.messagesContainer}`}>
			{messages.map((message, index) => {
				const side =
					message.person === activePerson
						? MessageSidesEnum.RIGHT
						: MessageSidesEnum.LEFT;
				return (
					<Message key={`message-${index}`} side={side}>
						{message.text}
					</Message>
				);
			})}
		</div>
	);
};

export default MessagesContainer;
