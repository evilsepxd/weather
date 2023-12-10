

import Header from "../header/Header";
import CurrentWeather from "../currentWeather/CurrentWeather";

function App() {

	return (
		<div className="app">
			<section className="weather">
				<Header/>
				<CurrentWeather/>
			</section>
			<aside className="aside">

			</aside>
		</div>
	);
}

export default App;