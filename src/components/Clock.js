import { useState, useEffect } from 'react';

const Clock = ({ clockData, isExpanded, setIsExpanded }) => {
	const [date, setDate] = useState(new Date());

	const pad = (time) => {
		if (time < 10) {
			return '0' + time;
		} else {
			return time;
		}
	};

	const handleShowMore = () => {
		if (isExpanded) {
			setIsExpanded(false);
		} else {
			setIsExpanded(true);
		}
	};

	const hours = date.getHours();
	const minutes = date.getMinutes();

	useEffect(() => {
		setInterval(() => {
			setDate(new Date());
		}, 1000);
	}, []);

	return (
		<>
			<div className='container clock'>
				<div className='clock-heading'>
					<p className='text-l clock-greeting-container'>
						<span className='time-icon'>
							<img
								src={require('../images/icons/icon-sun.svg').default}
								alt=''
							/>
						</span>
						<span className='clock-greet'>
							Good Morning<span>, it's currently</span>
						</span>
					</p>
					<h1 className='text-xxl clock-time'>
						{`${hours}:${pad(minutes)}`}
						<span className='clock-timezone'>{clockData.abbreviation}</span>
					</h1>
				</div>
				<button className='btn' onClick={handleShowMore}>
					{isExpanded ? 'Less' : 'More'}
					<img
						src={require('../images/icons/icon-arrow-up.png').default}
						alt=''
						className='btn-icon'
					/>
				</button>

				<div className={`clock-info ${isExpanded ? 'expanded' : ''}`}>
					<div className='container clock-info-container'>
						<div className='topic'>
							<h2 className='text-s clock-info-title'>Current Timezone</h2>
							<p className='text-xl clock-info-data'>{clockData.timezone}</p>
						</div>
						<div className='topic'>
							<h2 className='text-s clock-info-title'>Day of the year</h2>
							<p className='text-xl clock-info-data'>{clockData.day_of_year}</p>
						</div>
						<div className='topic'>
							<h2 className='text-s clock-info-title'>day of the week</h2>
							<p className='text-xl clock-info-data'>{clockData.day_of_week}</p>
						</div>
						<div className='topic'>
							<h2 className='text-s clock-info-title'>Week number</h2>
							<p className='text-xl clock-info-data'>{clockData.week_number}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Clock;
