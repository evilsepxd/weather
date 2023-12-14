

import WeeklyItem from "../weatherItem/WeatherItem";

import './weeklyForecast.scss';

function WeeklyForecast() {

	return (
		<ul className="weekly">
			<WeeklyItem itemClassName="weekly" todayClassName={''} />
			<WeeklyItem itemClassName="weekly" todayClassName={''} />
			<WeeklyItem itemClassName="weekly" todayClassName='today' />
			<WeeklyItem itemClassName="weekly" todayClassName={''} />
			<WeeklyItem itemClassName="weekly" todayClassName={''} />
			<WeeklyItem itemClassName="weekly" todayClassName={''} />
			<WeeklyItem itemClassName="weekly" todayClassName={''} />
		</ul>
	);
}

export default WeeklyForecast;