import { SEND_MESSAGE, MESSAGE_SENT } from './message.types';
import { createAction } from 'typesafe-actions';
import MessageModel from 'src/models/message.model';

export const sendMessage = createAction(SEND_MESSAGE, (message: MessageModel) => ({
	...message,
}))<MessageModel>();
export const messageSent = createAction(MESSAGE_SENT, (message: MessageModel) => ({
	...message,
}))<MessageModel>();
