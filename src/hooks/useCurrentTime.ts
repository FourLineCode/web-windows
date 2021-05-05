import { format } from 'date-fns';
import { useState } from 'react';
import useInterval from './useInterval';

const useCurrentTime = () => {
	const [time, setTime] = useState(Date.now());
	const updateTime = () => setTime(Date.now());

	useInterval(updateTime, 15000);

	return [format(time, 'p'), format(time, 'd MMM, yy')];
};

export default useCurrentTime;
