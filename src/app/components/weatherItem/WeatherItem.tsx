

import { weatherItemTypes, weatherItemTodayTypes, weekDayType } from '../../types/types';

import './weatherItem.scss';

function WeeklyItem(
	{ name, itemClassName, todayClassName }:
	{
		name: weekDayType,
		itemClassName: weatherItemTypes,
		todayClassName?: weatherItemTodayTypes
	}
) {

	return (
		<li className={`weather-item weather-item_${itemClassName} ${todayClassName}`}>
			<div className="weather-item__title">{ name }</div>
			<div className="weather-item__temp">20°</div>
			<div className="weather-item__descr">Mist</div>
		</li>
	);
}

export default WeeklyItem;