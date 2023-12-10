

import WeatherItem from '../weatherItem/WeatherItem';

import './hourlyForecast.scss';

function HourlyForecast() {

	return (
		<div className="hourly">
			<div className="hourly__title">Hourly Forecast</div>

			<ul className="hourly__list">
				<WeatherItem/>
				<WeatherItem/>
				<WeatherItem/>
				<WeatherItem/>
				<WeatherItem/>
				<WeatherItem/>
			</ul>
		</div>
	);
}

export default HourlyForecast;