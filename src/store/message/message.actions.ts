import {
	SEND_MESSAGE,
	MESSAGE_SENT,
	RESET_MESSAGES,
	RESET_MESSAGES_SUCCESS,
} from './message.types';
import { createAction } from 'typesafe-actions';
import MessageModel from 'src/models/message.model';

export const sendMessage = createAction(SEND_MESSAGE, (message: MessageModel) => ({
	...message,
}))<MessageModel>();
export const messageSent = createAction(MESSAGE_SENT, (message: MessageModel) => ({
	...message,
}))<MessageModel>();

export const readMessages = createAction(RESET_MESSAGES)();
export const readMessagesSuccess = createAction(RESET_MESSAGES_SUCCESS)();
