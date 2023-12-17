export type ThemeTypes = 'light' | 'dark';

export type weatherItemTypes = 'weekly' | 'hourly';

export type weatherItemTodayTypes = 'today' | '';

export type weekDayType = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';

export type positionType = {
	latitude: string,
	longitude: string,
	name?: string
}

export type arrayWeatherType = {
	[key: string]: number[] | string[];
}
export type innerWeatherType = {
	[key: string]: number | string;
}

export type weatherType = {
	daily: arrayWeatherType,
	hourly: arrayWeatherType,
	now: innerWeatherType
}