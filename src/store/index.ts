// export { default as epics } from './combine-epics';
// export { default as reducers } from './combine-reducers';

import { compose, createStore, applyMiddleware } from 'redux'; // and your other imports from before
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './combine-reducers';
import rootEpic from './combine-epics';
import AppState from './app-state';
import { RootAction } from './root-actions';

export type RootStateType = AppState;
export type RootActions = RootAction;

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
	}
}

const epicMiddleware = createEpicMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState: AppState = {
	messageState: {
		messages: [],
		newMessages: 0,
	},
};

const store = createStore(
	rootReducer,
	initialState,
	composeEnhancers(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(rootEpic as any);

export default store;
