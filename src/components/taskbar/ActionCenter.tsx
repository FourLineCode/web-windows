import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { TaskBarToolIcon } from '../ui/TaskBarToolIcon';

export function ActionCenter() {
	const [showActionCenter, setShowActionCenter] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!showActionCenter || !process.browser) return;

		const clickEvent = (e: MouseEvent) => {
			// TODO: Add buttonref
			if (!ref.current?.contains(e.target as Node)) {
				setShowActionCenter(false);
			}
		};

		const escEvent = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setShowActionCenter(false);
			}
		};

		document.addEventListener('mousedown', clickEvent);
		document.addEventListener('keydown', escEvent);

		return () => {
			document.removeEventListener('mousedown', clickEvent);
			document.removeEventListener('keydown', escEvent);
		};
	}, [showActionCenter]);

	const stopPropagation = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

	return (
		<TaskBarToolIcon
			ref={ref}
			icon={faCommentAlt}
			className='relative'
			onClick={() => setShowActionCenter((prev) => !prev)}
		>
			<AnimatePresence>
				{showActionCenter && (
					<motion.div
						onClick={stopPropagation}
						initial={{ width: 200, opacity: 1 }}
						animate={{ width: 400, opacity: 1 }}
						exit={{ width: 0, opacity: 0.6 }}
						className='absolute overflow-hidden flex justify-center items-center h-screen w-[400px] right-0 bottom-full bg-gray-800 bg-opacity-95'
					>
						<span className='text-xl font-semibold text-gray-400 truncate'>No new notifications</span>
					</motion.div>
				)}
			</AnimatePresence>
		</TaskBarToolIcon>
	);
}
