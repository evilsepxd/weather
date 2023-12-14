

import './detailedWeather.scss';

import windIcon from '../../../assets/icons/wind.svg';
import humidityIcon from '../../../assets/icons/humidity.svg';

function DetailedWeather() {

	return (
		<div className="details">
			<div className="current current_small">
				<div className="current__details current__details_small">
					<div className="current__temp current__temp_small">20°</div>
					<div className="current__indicators current__indicators_small">
						<div className="current__wind-speed current__wind-speed_small">
							<img src={windIcon} alt="wind icon" className="current__icon" />
							6.1 mph
						</div>
						<div className="current__humidity current__humidity_small">
							<img src={humidityIcon} alt="humidity icon" className="current__icon" />
							90 %
						</div>
					</div>
				</div>
				<div className="current__feels">Feels like 19°</div>
				<div className="current__descr current__descr_small">Cloudy</div>
			</div>
		</div>
	);
}

export default DetailedWeather;