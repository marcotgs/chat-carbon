import React from 'react';
import { Tile } from 'carbon-components-react';
import cl from 'classnames';
import MessageSidesEnum from '../../../constants/message-sides.enum';
import MessageProps from './message.props';
import styles from './message.module.scss';

const Message: React.StatelessComponent<MessageProps> = props => {
	const messageSideClass =
		props.side === MessageSidesEnum.LEFT ? styles.messageLeft : styles.messageRight;
	return <Tile className={cl(styles.message, messageSideClass)}>{props.children}</Tile>;
};

export default Message;
