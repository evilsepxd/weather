

import { useEffect, useState } from "react";

import WeeklyItem from "../weatherItem/WeatherItem";

import { weekDayType } from "../../types/types";

import './weeklyForecast.scss';

function WeeklyForecast() {

	const weekDay = new Date().toLocaleString('en-US', { weekday: 'short' });

	const [days, setDays] = useState<weekDayType[]>(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);

	useEffect(() => {
		setDays(prev => {
			const todayIndex = days.findIndex(day => day === weekDay);

			return [
				prev[todayIndex],
				...prev.slice(todayIndex + 1),
				...prev.slice(0, todayIndex)
			];
		});
	}, []);

	return (
		<ul className="weekly">
			{
				days.map(day => <WeeklyItem
								key={day}
								name={day}
								itemClassName="weekly"
								todayClassName={weekDay === day ? 'today' : ''}
								/>)
			}
		</ul>
	);
}

export default WeeklyForecast;