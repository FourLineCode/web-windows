import { useEffect } from 'react';

const useInterval = (callback: Function, interval: number) => {
	useEffect(() => {
		const tick = () => callback();
		const id = setInterval(tick, interval);
		return () => clearInterval(id);
	}, [interval]);
};

export default useInterval;
