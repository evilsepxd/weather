

import WeeklyItem from "../weatherItem/WeatherItem";

import { weekDayType } from "../../types/types";

import './weeklyForecast.scss';

function WeeklyForecast() {

	const weekDay = new Date().toLocaleString('en-US', { weekday: 'short' });

	const days: Array<weekDayType> = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

	return (
		<ul className="weekly">
			{
				days.map(day => <WeeklyItem
								name={day}
								itemClassName="weekly"
								todayClassName={weekDay === day ? 'today' : ''}
								/>)
			}
		</ul>
	);
}

export default WeeklyForecast;