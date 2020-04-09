import * as MessageActions from './message/message.actions';
import { ActionType } from 'typesafe-actions';

export type RootAction = ActionType<typeof MessageActions>;
