import MessageModel from '../../../models/message.model';
import PersonTypesEnum from './../../../constants/persons-types.enum';

interface MessageContainerProps {
	messages: MessageModel[];
	activePerson: PersonTypesEnum;
}

export default MessageContainerProps;
