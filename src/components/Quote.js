import FetchData from './FetchData';
import { useState } from 'react';

const Quote = ({ quoteData, isExpanded }) => {
	const [data, setData] = useState(quoteData);

	const handleQuote = async () => {
		const response = await fetch('http://api.quotable.io/random?minLength=200');
		const newQuote = await response.json();
		setData(newQuote);
	};

	return (
		<figure
			className={`container quote-container ${isExpanded ? 'expanded' : ''}`}
		>
			<blockquote className='quote'>
				<p>{data.content}</p>
				<img
					src={require('../images/icons/icon-refresh.png').default}
					alt=''
					onClick={handleQuote}
				/>
			</blockquote>
			<figcaption className='author'>{data.author}</figcaption>
		</figure>
	);
};

export default Quote;
