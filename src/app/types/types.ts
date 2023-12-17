export type ThemeTypes = 'light' | 'dark';

export type weatherItemTypes = 'weekly' | 'hourly';

export type weatherItemTodayTypes = 'today' | '';

export type weekDayType = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';

export type positionType = {
	latitude: string,
	longitude: string
}

export type arrayWeatherType = {
	[key: string]: number[]
}

export type innerWeatherType = {
	[key: string]: number
}

export type weatherType = {
	[key: string]: arrayWeatherType | innerWeatherType,
}