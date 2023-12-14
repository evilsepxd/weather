

import './currentWeather.scss';

import windIcon from '../../../assets/icons/wind.svg';
import humidityIcon from '../../../assets/icons/humidity.svg';

function CurrentWeather() {

	return (
		<div className="current">
			<div className="current__details">
				<div className="current__temp">20°</div>
				<div className="current__indicators">
					<div className="current__wind-speed">
						<img src={windIcon} alt="wind icon" className="current__icon" />
						6.1 mph
					</div>
					<div className="current__humidity">
						<img src={humidityIcon} alt="humidity icon" className="current__icon" />
						90 %
					</div>
				</div>
			</div>
			<div className="current__descr">Cloudy</div>
		</div>
	);
}

export default CurrentWeather;