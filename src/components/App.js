import Clock from './Clock';
import Quote from './Quote';
import FetchData from './FetchData';
import { useState } from 'react';

function App() {
	const {
		data: clockData,
		isPending: clockPending,
		error: clockError,
	} = FetchData('http://worldtimeapi.org/api/ip');

	const {
		data: quoteData,
		isPending: quotePending,
		error: quoteError,
	} = FetchData('http://api.quotable.io/random?minLength=200');

	const [isExpanded, setIsExpanded] = useState(false);
	const [isDay, setIsDay] = useState(true);

	return (
		<div className='App night'>
			<Quote quoteData={quoteData} isExpanded={isExpanded} />
			<Clock
				clockData={clockData}
				isExpanded={isExpanded}
				setIsExpanded={setIsExpanded}
				isDay={isDay}
				setIsDay={setIsDay}
			/>
		</div>
	);
}

export default App;
