import { ActionType, getType } from 'typesafe-actions';
import * as actions from './message.actions';
import MessageState from './message.state';

type Action = ActionType<typeof actions>;

const initialState: MessageState = {
	messages: [],
	newMessages: 0,
};

export const messageReducer = (
	state: MessageState = initialState,
	action: Action
): MessageState => {
	switch (action.type) {
		case getType(actions.messageSent):
			const messages = [...state.messages, action.payload];
			return Object.assign({}, state, {
				messages,
				newMessages: state.newMessages + 1,
			});

		case getType(actions.readMessagesSuccess):
			return Object.assign({}, state, {
				newMessages: 0,
			});

		default:
			return state;
	}
};
