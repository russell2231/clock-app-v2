import { useState, useEffect } from 'react';

const FetchData = (url) => {
	const [data, setData] = useState([]);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState([]);

	const getData = async () => {
		try {
			const response = await fetch(url);
			const data = await response.json();

			setData(data);
			setIsPending(false);
			setError(null);
		} catch (err) {
			setIsPending(false);
			setError(err.message);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return { data, isPending, error };
};

export default FetchData;
