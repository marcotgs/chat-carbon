import MessageModel from '../../models/message.model';

interface MessageState {
	messages: MessageModel[];
	newMessages: number;
}

export default MessageState;
