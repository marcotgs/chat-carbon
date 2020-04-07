import React from 'react';
import style from './home.module.scss';
import ChatTemplate from '../../templates/chat/chat';

const HomePage = () => {
	return (
		<div className={style.homePage}>
			<ChatTemplate />
		</div>
	);
};

export default HomePage;
