

import { weatherItemTypes, weatherItemTodayTypes } from '../../types/types';

import './weatherItem.scss';

function WeeklyItem(
	{ itemClassName, todayClassName }:
	{
		itemClassName: weatherItemTypes,
		todayClassName: weatherItemTodayTypes
	}
) {

	return (
		<li className={`weather-item weather-item_${itemClassName} ${todayClassName}`}>
			<div className="weather-item__title">Today</div>
			<div className="weather-item__temp">20°</div>
			<div className="weather-item__descr">Mist</div>
		</li>
	);
}

export default WeeklyItem;