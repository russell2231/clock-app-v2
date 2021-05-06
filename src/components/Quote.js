import FetchData from './FetchData';
import { useState, useEffect } from 'react';

const Quote = ({ quoteData, isExpanded }) => {
	const [data, setData] = useState(quoteData);

	const handleQuote = async () => {
		const response = await fetch('http://api.quotable.io/random?minLength=200');
		const newQuote = await response.json();
		setData(newQuote);
	};

	useEffect(() => {
		setData(quoteData);
	}, [quoteData]);

	return (
		<figure className={`container quote ${isExpanded ? 'expanded' : ''}`}>
			<blockquote className='text-m quote-container'>
				<p className='quote-content'>{`"${data.content}"`}</p>
				<img
					src={require('../images/icons/icon-refresh.png').default}
					alt='refresh quote'
					className='refresh'
					onClick={handleQuote}
				/>
			</blockquote>
			<figcaption className='text-m quote-author'>{data.author}</figcaption>
		</figure>
	);
};

export default Quote;
