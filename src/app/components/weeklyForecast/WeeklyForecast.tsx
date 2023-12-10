

import WeeklyItem from "../weatherItem/WeatherItem";

import './weeklyForecast.scss';

function WeeklyForecast() {

	return (
		<ul className="weekly">
			<WeeklyItem/>
			<WeeklyItem/>
			<WeeklyItem/>
			<WeeklyItem/>
			<WeeklyItem/>
			<WeeklyItem/>
			<WeeklyItem/>
		</ul>
	);
}

export default WeeklyForecast;