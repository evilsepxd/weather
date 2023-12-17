

import { useState, useEffect } from "react";

import Header from "../header/Header";
import CurrentWeather from "../currentWeather/CurrentWeather";
import WeeklyForecast from "../weeklyForecast/WeeklyForecast";

import DetailedWeather from "../detailedWeather/DetailedWeather";
import AsideHeader from "../asideHeader/AsideHeader";
import HourlyForecast from "../hourlyForecast/HourlyForecast";

import { ThemeTypes, positionType, weatherType } from "../../types/types";

import './app.scss';

function App() {

	const WMOCodes = [
		'Clear',
		'Cloudy',
		'Snow',
		'Blizzard',
		'Fog',
		'Drizzle',
		'Rain',
		'Snow',
		'Shower',
		'Thunder'
	]

	const initialWeather: weatherType = {
		daily: {
			temp: Array<number>(7).fill(0),
			code: Array<string>(7).fill('')
		},
		hourly: {
			temp: Array<number>(6).fill(0),
			code: Array<string>(6).fill('')
		},
		now: {
			temp: 0,
			feelsLike: 0,
			humidity: 0,
			windSpeed: 0,
			code: ''
		}
	}

	const userTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	const savedTheme = localStorage.getItem('theme') as ThemeTypes;

	const [theme, setTheme] = useState<ThemeTypes>(savedTheme ? savedTheme : userTheme);
	const [position, setPosition] = useState<positionType | null>(null);
	const [weatherData, setWeatherData] = useState<weatherType>(initialWeather);


	useEffect(() => {
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(pos => setPosition({
				latitude: pos.coords.latitude.toFixed(2),
				longitude: pos.coords.longitude.toFixed(2)
			}));
		} else {
			setPosition(null);
		}
	}, []);


	useEffect(() => {
		if (position) {
			const url = `https://api.open-meteo.com/v1/forecast?
						latitude=${position.latitude}
						&longitude=${position.longitude}
						&hourly=temperature_2m,
						relative_humidity_2m,
						apparent_temperature,
						weather_code,
						wind_speed_10m
						&daily=weather_code,
						temperature_2m_max,
						temperature_2m_min`;

			fetch(url).then(res => res.json()).then(res => {
				const currentHours = new Date().getHours();
				const hourlyTimeData: string[] = res.hourly.time.slice(0, 24);

				const indexNow = hourlyTimeData.findIndex(item => +item.slice(-5, -3) === currentHours);
				const indexMax = indexNow + 6;
				return {
					daily: {
						temp: res.daily.temperature_2m_max.map((item: number, i: number) => {
							return Math.round((item + res.daily.temperature_2m_min[i]) / 2);
						}),
						code: res.daily.weather_code.map((item: number) => {
							return WMOCodes[+item.toString().slice(0, 1)];
						})
					},
					hourly: {
						temp: res.hourly.temperature_2m.slice(indexNow, indexMax).map((temp: number) => {
							const res = Math.round(temp);
							if (res === 0) return Math.abs(res);
							return res;
						}),
						code: res.hourly.weather_code.slice(indexNow, indexMax).map((item: number) => {
							return WMOCodes[+item.toString().slice(0, 1)];
						})
					},
					now: {
						temp: res.hourly.temperature_2m[indexNow],
						feelsLike: res.hourly.apparent_temperature[indexNow],
						humidity: res.hourly.relative_humidity_2m[indexNow],
						windSpeed: res.hourly.wind_speed_10m[indexNow],
						code: WMOCodes[+res.hourly.weather_code[indexNow].toString().slice(0, 1)]
					}
				} as weatherType
			}).then(res => setWeatherData(res));
		} else {
			console.log('no position found');
		}
	}, [position]);


	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	}, [theme]);


	return (
		<div className="app">
			<section className="weather">
				<Header theme={theme} setTheme={setTheme} />
				<CurrentWeather data={weatherData.now} theme={theme} />
				<WeeklyForecast data={weatherData.daily} />
			</section>
			<aside className="aside">
				<AsideHeader/>
				<DetailedWeather data={weatherData.now} theme={theme} />
				<HourlyForecast data={weatherData.hourly} />
			</aside>
		</div>
	);
}

export default App;