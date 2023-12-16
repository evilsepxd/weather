

import { useEffect, useState } from 'react';

import './asideHeader.scss';

function AsideHeader() {

	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTime(new Date());
		}, 1000);

		return () => clearInterval(intervalId);
	}, []);
	
	const formattedTime = time.toLocaleString('ru', { hour: '2-digit', minute: '2-digit' })

	return (
		<header className="aside-header">
			<div className="aside-header__title">Good Evening</div>
			<time className="aside-header__time">{ formattedTime }</time>
		</header>
	);
}

export default AsideHeader;