

import { locationDataType, positionType } from "../../types/types";

function SearchResult({ data, setPosition, searchRef }: {
	data: locationDataType,
	setPosition: React.Dispatch<React.SetStateAction<positionType>>,
	searchRef: React.MutableRefObject<HTMLDivElement | null>
}) {

	const onClick = () => {
		setPosition({
			name: data.name,
			latitude: data.latitude.toFixed(2),
			longitude: data.longitude.toFixed(2)
		});
		if (searchRef.current!.classList.contains('active')) {
			searchRef.current!.classList.remove('active');
			setTimeout(() => {
				searchRef.current!.style.display = 'none';
			}, 300);
		}
	}

	return (
		<li key={data.id} onClick={onClick} className="header__item">
			{ data.name }
		</li>
	);
}

export default SearchResult;