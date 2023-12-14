

import WeatherItem from '../weatherItem/WeatherItem';

import './hourlyForecast.scss';

function HourlyForecast() {

	return (
		<div className="hourly">
			<div className="hourly__title">Hourly Forecast</div>

			<ul className="hourly__list">
				<WeatherItem itemClassName='hourly' />
				<WeatherItem itemClassName='hourly' />
				<WeatherItem itemClassName='hourly' />
				<WeatherItem itemClassName='hourly' />
				<WeatherItem itemClassName='hourly' />
				<WeatherItem itemClassName='hourly' />
			</ul>
		</div>
	);
}

export default HourlyForecast;