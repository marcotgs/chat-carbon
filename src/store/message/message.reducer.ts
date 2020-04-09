import { ActionType, getType } from 'typesafe-actions';
import * as actions from './message.actions';
import MessageState from './message.state';

type Action = ActionType<typeof actions>;

const initialState: MessageState = {
	messages: [],
};

export const messageReducer = (
	state: MessageState = initialState,
	action: Action
): MessageState => {
	switch (action.type) {
		case getType(actions.messageSent):
			return Object.assign({}, state, { messages: [...state.messages, action.payload] });

		default:
			return state;
	}
};
