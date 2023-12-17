

import { useRef, useEffect } from 'react';

import { ThemeTypes } from "../../types/types";

import './header.scss';

function Header(
	{ theme, setTheme }:
	{ theme: ThemeTypes, setTheme: React.Dispatch<React.SetStateAction<ThemeTypes>> }
) {

	const btnRef = useRef<HTMLSpanElement | null>(null);

	const handleClick = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
		if (btnRef.current?.classList.contains('light')) {
			btnRef.current?.classList.remove('light');
			btnRef.current.classList.add('dark');
		} else if (btnRef.current?.classList.contains('dark')) {
			btnRef.current?.classList.remove('dark');
			btnRef.current?.classList.add('light');
		}
	}

	useEffect(() => {
		btnRef.current?.classList.add(theme === 'light' ? 'light' : 'dark');
	}, []);

	return (
		<header className="header">
			<div className="header__location">
				<button className="header__location-btn">
					Your location
				</button>
				<div className="header__search">
					<input type="text" className='header__input'/>
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
				<span ref={btnRef}></span>
			</button>
		</header>
	);
}

export default Header;