import { combineReducers } from 'redux';
import { messageReducer } from './message/message.reducer';

const rootReducer = combineReducers({
	messageState: messageReducer,
});

export default rootReducer;
