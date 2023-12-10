

function CurrentWeather() {

	return (
		<div className="current">
			<div className="current__temp">20°</div>
			<div className="current__indicators">
				<div className="current__wind-speed">6.1 mph</div>
				<div className="current__humidity">90 %</div>
			</div>
			<div className="current__descr"></div>
		</div>
	);
}

export default CurrentWeather;