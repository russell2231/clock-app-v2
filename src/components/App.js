import Clock from './Clock';
import Quote from './Quote';
import FetchData from './FetchData';
import { useState, useEffect } from 'react';

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

	const [date, setDate] = useState(new Date());
	const [isExpanded, setIsExpanded] = useState(false);

	let timeBackground =
		date.getHours() > 6 && date.getHours() < 18 ? 'day' : 'night';

	useEffect(() => {
		setInterval(() => {
			setDate(new Date());
		}, 1000);
	}, []);

	return (
		<div className={`App ${timeBackground}`}>
			{quoteError && <div className='container'>Unable to get quote</div>}
			{quotePending && <div className='container'>Loading...</div>}
			{quoteData && <Quote quoteData={quoteData} isExpanded={isExpanded} />}

			{clockError && <div className='container'>Unable to get clock data</div>}
			{clockPending && <div className='container'>Loading...</div>}
			{clockData && (
				<Clock
					clockData={clockData}
					isExpanded={isExpanded}
					setIsExpanded={setIsExpanded}
					date={date}
					setDate={setDate}
				/>
			)}
		</div>
	);
}

export default App;
