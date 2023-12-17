

import WeatherItem from '../weatherItem/WeatherItem';

import './hourlyForecast.scss';

function HourlyForecast() {

	const cardsNames = Array<string>(6).fill('');

	return (
		<div className="hourly">
			<div className="hourly__title">Hourly Forecast</div>

			<ul className="hourly__list">
				{
					cardsNames.map((item, i) => {
						const hours = new Date().getHours() + i;
						const formattedHours = (hours % 12) + (hours > 12 ? ' AM' : ' PM');

						return <WeatherItem name={formattedHours} key={i} itemClassName='hourly' />;
					})
				}
			</ul>
		</div>
	);
}

export default HourlyForecast;