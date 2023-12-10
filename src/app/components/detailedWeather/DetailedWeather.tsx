

function DetailedWeather() {

	return (
		<div className="details">
			<div className="current current_small">
				<div className="current__temp current__temp_small">20°</div>
				<div className="current__indicators current__indicators_small">
					<div className="current__wind-speed current__wind-speed_small">6.1 mph</div>
					<div className="current__humidity current__humidity_small">90 %</div>
				</div>
				<div className="current__feels">Feels like 19°</div>
				<div className="current__descr current__descr_small">Cloudy</div>
			</div>
		</div>
	);
}

export default DetailedWeather;