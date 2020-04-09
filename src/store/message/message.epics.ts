import { Epic } from 'redux-observable';
import { isActionOf } from 'typesafe-actions';
import AppState from '../app-state';
import * as actions from './message.actions';
import { filter, map } from 'rxjs/operators';
import { RootAction } from '../root-actions';

export const sendMessagesEpic: Epic<RootAction, RootAction, AppState> = $action =>
	$action.pipe(
		filter(isActionOf(actions.sendMessage)),
		map(action => actions.messageSent(action.payload))
	);

export const readMessagesEpic: Epic<RootAction, RootAction, AppState> = $action =>
	$action.pipe(
		filter(isActionOf(actions.readMessages)),
		map(() => actions.readMessagesSuccess())
	);
