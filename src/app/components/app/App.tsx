

import Header from "../header/Header";
import CurrentWeather from "../currentWeather/CurrentWeather";
import WeeklyForecast from "../weeklyForecast/WeeklyForecast";

import DetailedWeather from "../detailedWeather/DetailedWeather";
import AsideHeader from "../asideHeader/AsideHeader";
import HourlyForecast from "../hourlyForecast/HourlyForecast";

import './app.scss';

function App() {

	return (
		<div className="app">
			<section className="weather">
				<Header/>
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