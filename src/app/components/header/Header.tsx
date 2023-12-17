

import { useRef, useEffect, useState } from 'react';

import { ThemeTypes, positionType, locationDataType } from "../../types/types";

import './header.scss';

function Header(
	{ theme, setTheme, position, setPosition }:
	{
		theme: ThemeTypes,
		setTheme: React.Dispatch<React.SetStateAction<ThemeTypes>>,
		position: positionType,
		setPosition: React.Dispatch<React.SetStateAction<positionType>>
	}
) {

	const btnThemeRef = useRef<HTMLSpanElement | null>(null);
	const searchRef = useRef<HTMLDivElement | null>(null);
	
	const [input, setInput] = useState('');
	const [locationData, setLocationData] = useState<locationDataType[]>([]);

	const handleClick = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
		if (btnThemeRef.current!.classList.contains('light')) {
			btnThemeRef.current!.classList.remove('light');
			btnThemeRef.current!.classList.add('dark');
		} else if (btnThemeRef.current!.classList.contains('dark')) {
			btnThemeRef.current!.classList.remove('dark');
			btnThemeRef.current!.classList.add('light');
		}
	}

	useEffect(() => {
		btnThemeRef.current!.classList.add(theme === 'light' ? 'light' : 'dark');
	}, []);

	const onSearchClick = () => {
		if (searchRef.current!.classList.contains('active')) {
			searchRef.current!.classList.remove('active');
			setTimeout(() => {
				searchRef.current!.style.display = 'none';
			}, 300);
		} else {
			searchRef.current!.style.display = 'block';
			setTimeout(() => {
				searchRef.current!.classList.add('active');
			});
		}
	}

	useEffect(() => {
		if (input !== '') {
			const url = `https://geocoding-api.open-meteo.com/v1/search?name=${input}&count=10&language=en&format=json`;
			const timeoutId = setTimeout(() => {
				fetch(url)
				.then(res => res.json())
				.then(res => {
					setLocationData(res.results.slice(0, 5));
					console.log(res.results);
				});
			}, 300);

			return () => clearTimeout(timeoutId);
		}
	}, [input]);

	const locations = locationData.map(item => (
		<li key={item.id} className="header__item">
			<button>{ item.name.length <= 24 ? item.name : item.name.slice(0, 23) + '...' }</button>
		</li>
	));

	return (
		<header className="header">
			<div className="header__location">
				<button onClick={onSearchClick} className="header__location-btn">
					{ position.name }
				</button>
				<div className="header__search" ref={searchRef}>
					<input
						type="text"
						className='header__input'
						value={input}
						onChange={e => setInput(e.target.value)}
					/>
					<ul className="header__list">
						{ locations }
					</ul>
				</div>
			</div>

			<time className="header__time">
				10.12.2023
			</time>

			<button className='header__btn' onClick={handleClick}>
				<span ref={btnThemeRef}></span>
			</button>
		</header>
	);
}

export default Header;