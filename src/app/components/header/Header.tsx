

import './header.scss';

function Header() {

	return (
		<header className="header">
			<address className="header__location">
				Vladivostok
			</address>

			<time className="header__time">
				10.12.2023
			</time>
		</header>
	);
}

export default Header;