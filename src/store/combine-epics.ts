import { combineEpics } from 'redux-observable';
import * as messageEpics from './message/message.epics';

const rootEpic = combineEpics(...Object.values(messageEpics));

export default rootEpic;
