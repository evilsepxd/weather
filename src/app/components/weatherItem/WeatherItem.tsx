

import { weatherItemTypes, weatherItemTodayTypes } from '../../types/types';

import './weatherItem.scss';

function WeeklyItem(
	{ name, value, code, itemClassName, todayClassName }:
	{
		name: string,
		value: number,
		code: string,
		itemClassName: weatherItemTypes,
		todayClassName?: weatherItemTodayTypes
	}
) {

	return (
		<li className={`weather-item weather-item_${itemClassName} ${todayClassName}`}>
			<div className="weather-item__title">{ name }</div>
			<div className="weather-item__temp">{ value }°</div>
			<div className="weather-item__descr">{ code }</div>
		</li>
	);
}

export default WeeklyItem;