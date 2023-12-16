

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

	const greeting = () => {
		const res = 'Good ';
		const hours = time.getHours();
		if (hours >= 6 && hours < 12) return res + 'Morning';
		else if (hours >= 12 && hours < 18) return res + 'Afternoon';
		else if (hours >= 18 && hours < 24) return res + 'Evening';
		else return res + 'Night';
	}

	return (
		<header className="aside-header">
			<div className="aside-header__title">{ greeting() }</div>
			<time className="aside-header__time">{ formattedTime }</time>
		</header>
	);
}

export default AsideHeader;