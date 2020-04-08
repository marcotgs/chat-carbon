import MessageSidesEnum from './../../../constants/message-sides.enum';

interface MessageProps {
	side?: MessageSidesEnum;
	children: string;
}

export default MessageProps;
