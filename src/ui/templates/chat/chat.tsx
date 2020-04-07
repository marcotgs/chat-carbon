import React from 'react';

const ChatTemplate: React.StatelessComponent = () => {
	return (
		<div className="u-height--full" id="chat-template" data-testid="chat-template">
			<div className="bx--grid bx--grid--full-width u-height--full">
				<div className="bx--row u-height--full">
					<div
						data-testid="chat-container"
						className="bx--col-lg-8 bx--offset-lg-4"
					></div>
				</div>
			</div>
		</div>
	);
};

export default ChatTemplate;
