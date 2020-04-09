import { TestScheduler } from 'rxjs/testing';
import { ActionsObservable, StateObservable } from 'redux-observable';
import AppState from '../../app-state';
import { sendMessage, messageSent, readMessagesSuccess } from '../message.actions';
import PersonTypesEnum from '../../../constants/persons-types.enum';
import { sendMessagesEpic, readMessagesEpic } from '../message.epics';
import { readMessages } from 'src/store/message/message.actions';

const testScheduler = new TestScheduler((actual, expected) => {});

describe('MessageEpics', () => {
	let scheduler: TestScheduler;
	const initialState$: AppState = {
		messageState: {
			messages: [],
			newMessages: 0,
		},
	};
	beforeEach(() => {
		jest.resetModules();
		scheduler = new TestScheduler((actual, expected) => {
			expect(actual).toEqual(expected);
		});
	});

	afterEach(() => {
		scheduler.flush();
	});

	test('add new message', () => {
		testScheduler.run(({ hot, expectObservable }) => {
			const message = { text: 'first message', person: PersonTypesEnum.PERSON_1 };
			const actionInput$ = hot('--a|', {
				a: sendMessage(message),
			});
			const stateInput$ = hot('--a|', {
				a: {
					messageState: {
						messages: [message],
						newMessages: 1,
					},
				} as AppState,
			});
			const state$ = new StateObservable(stateInput$, initialState$);
			const action$ = new ActionsObservable(actionInput$);

			const output$ = sendMessagesEpic(action$, state$, {});
			expectObservable(output$).toBe('--a', { a: messageSent(message) });
		});
	});

	test('read message', () => {
		testScheduler.run(({ hot, expectObservable }) => {
			const message = { text: 'first message', person: PersonTypesEnum.PERSON_1 };
			const actionInput$ = hot('-a|', {
				a: readMessages(),
			});
			const stateInput$ = hot('-a|', {
				a: {
					messageState: {
						messages: [message],
						newMessages: 0,
					},
				} as AppState,
			});
			const state$ = new StateObservable(stateInput$, {
				messageState: {
					messages: [message],
					newMessages: 1,
				},
			} as AppState);
			const action$ = new ActionsObservable(actionInput$);

			const output$ = readMessagesEpic(action$, state$, {});
			expectObservable(output$).toBe('-a|', { a: readMessagesSuccess() });
		});
	});
});
