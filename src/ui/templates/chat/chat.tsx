import React from 'react';
import ChatOrganism from '../../organisms/chat/chat';

const ChatTemplate: React.StatelessComponent = () => {
	return (
		<div className="u-height--full" id="chat-template" data-testid="chat-template">
			<ChatOrganism />
		</div>
	);
};

export default ChatTemplate;
