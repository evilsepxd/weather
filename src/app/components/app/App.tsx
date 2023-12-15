

import { useState, useEffect } from "react";

import Header from "../header/Header";
import CurrentWeather from "../currentWeather/CurrentWeather";
import WeeklyForecast from "../weeklyForecast/WeeklyForecast";

import DetailedWeather from "../detailedWeather/DetailedWeather";
import AsideHeader from "../asideHeader/AsideHeader";
import HourlyForecast from "../hourlyForecast/HourlyForecast";

import { ThemeTypes } from "../../types/types";

import './app.scss';

function App() {

	const userTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

	const [theme, setTheme] = useState<ThemeTypes>(userTheme);

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
	}, [theme]);

	return (
		<div className="app">
			<section className="weather">
				<Header theme={theme} setTheme={setTheme} />
				<CurrentWeather/>
				<WeeklyForecast/>
			</section>
			<aside className="aside">
				<AsideHeader/>
				<DetailedWeather/>
				<HourlyForecast/>
			</aside>
		</div>
	);
}

export default App;