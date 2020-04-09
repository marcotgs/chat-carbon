import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { RootActions, RootStateType } from '../../../store';

import ChatOrganism from './chat';

interface OwnProps {}

const mapStateToProps = (state: RootStateType) => ({
	messages: state.messageState.messages,
	newMessages: state.messageState.newMessages,
});

const mapDispatchToProps = (dispatch: Dispatch<RootActions>, props: OwnProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ChatOrganism);
