import PersonTypesEnum from '../constants/persons-types.enum';

interface MessageModel {
	text: string;
	person: PersonTypesEnum;
}

export default MessageModel;
