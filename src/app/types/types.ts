export type ThemeTypes = 'light' | 'dark';

export type weatherItemTypes = 'weekly' | 'hourly';

export type weatherItemTodayTypes = 'today' | '';

export type weekDayType = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';

export type positionType = {
	latitude: string,
	longitude: string
}

export type dailyWeatherType = {
	[key: string]: number[]
}

export type hourlyWeatherType = {
	temp: number[],
	code: string[]
}

export type nowWeatherType = {
	[key: string]: number[]
}

export type weatherType = {
	daily: dailyWeatherType,
	hourly: hourlyWeatherType,
	now: nowWeatherType
}