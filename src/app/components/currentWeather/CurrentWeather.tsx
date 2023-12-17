

import { ThemeTypes, innerWeatherType } from '../../types/types';

import './currentWeather.scss';

import windIcon from '../../../assets/icons/wind.svg';
import humidityIcon from '../../../assets/icons/humidity.svg';
import humidityLightIcon from '../../../assets/icons/humidity-light.svg';
import windLightIcon from '../../../assets/icons/wind-light.svg';

function CurrentWeather({ theme, data }: { theme: ThemeTypes, data: innerWeatherType }) {

	return (
		<div className="current">
			<div className="current__details">
				<div className="current__temp">{ data.temp }°</div>
				<div className="current__indicators">
					<div className="current__wind-speed">
						<img
							src={theme === 'light' ? windLightIcon : windIcon}
							alt="wind icon"
							className="current__icon"
						/>
						{ data.windSpeed } ms
					</div>
					<div className="current__humidity">
						<img
							src={theme === 'light' ? humidityLightIcon : humidityIcon}
							alt="humidity icon"
							className="current__icon"
						/>
						{ data.humidity } %
					</div>
				</div>
			</div>
			<div className="current__descr">{ data.code }</div>
		</div>
	);
}

export default CurrentWeather;