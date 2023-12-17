

import { useRef, useEffect, useState } from 'react';

import { ThemeTypes, positionType } from "../../types/types";

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
						<li className="header__item"><button>Vladivostok</button></li>
						<li className="header__item"><button>Vladivostok</button></li>
						<li className="header__item"><button>Vladivostok</button></li>
						<li className="header__item"><button>Vladivostok</button></li>
						<li className="header__item"><button>Vladivostok</button></li>
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