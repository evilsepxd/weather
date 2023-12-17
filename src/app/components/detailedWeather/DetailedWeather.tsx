

import { ThemeTypes, innerWeatherType } from '../../types/types';

import './detailedWeather.scss';

import windIcon from '../../../assets/icons/wind.svg';
import humidityIcon from '../../../assets/icons/humidity.svg';
import humidityLightIcon from '../../../assets/icons/humidity-light.svg';
import windLightIcon from '../../../assets/icons/wind-light.svg';

function DetailedWeather({ theme, data }: { theme: ThemeTypes, data: innerWeatherType }) {

	return (
		<div className="details">
			<div className="current current_small">
				<div className="current__details current__details_small">
					<div className="current__temp current__temp_small">{ data.temp }°</div>
					<div className="current__indicators current__indicators_small">
						<div className="current__wind-speed current__wind-speed_small">
							<img
								src={theme === 'light' ? windLightIcon : windIcon}
								alt="wind icon"
								className="current__icon"
							/>
							{ data.windSpeed } kmh
						</div>
						<div className="current__humidity current__humidity_small">
							<img
								src={theme === 'light' ? humidityLightIcon : humidityIcon}
								alt="humidity icon"
								className="current__icon"
							/>
							{ data.humidity } %
						</div>
					</div>
				</div>
				<div className="current__feels">Feels like { data.feelsLike }°</div>
				<div className="current__descr current__descr_small">{ data.code }</div>
			</div>
		</div>
	);
}

export default DetailedWeather;