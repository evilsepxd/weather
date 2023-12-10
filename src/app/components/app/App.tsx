

import Header from "../header/Header";
import CurrentWeather from "../currentWeather/CurrentWeather";
import WeeklyForecast from "../weeklyForecast/WeeklyForecast";

function App() {

	return (
		<div className="app">
			<section className="weather">
				<Header/>
				<CurrentWeather/>
				<WeeklyForecast/>
			</section>
			<aside className="aside">

			</aside>
		</div>
	);
}

export default App;