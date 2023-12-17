

import { useEffect, useState } from "react";

import WeeklyItem from "../weatherItem/WeatherItem";

import { weekDayType, dailyWeatherType } from "../../types/types";

import './weeklyForecast.scss';

function WeeklyForecast({ data }: { data: dailyWeatherType | null }) {

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
				days.map((day, i) => <WeeklyItem
								key={day}
								name={day}
								value={data ? data.temp[i] : 0}
								itemClassName="weekly"
								todayClassName={weekDay === day ? 'today' : ''}
								/>)
			}
		</ul>
	);
}

export default WeeklyForecast;