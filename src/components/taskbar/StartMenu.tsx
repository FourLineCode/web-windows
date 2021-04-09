import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { WindowsLogo } from '../ui/WindowsLogo';

export function StartMenu() {
	const [showStartMenu, setShowStartMenu] = useState(false);
	const startMenuRef = useRef<HTMLDivElement>(null);
	const menuButtonRef = useRef<SVGSVGElement>(null);

	useEffect(() => {
		if (!showStartMenu || !process.browser) return;

		const clickEvent = (e: MouseEvent) => {
			if (
				!startMenuRef.current?.contains(e.target as Node) &&
				!menuButtonRef.current?.contains(e.target as Node)
			) {
				setShowStartMenu(false);
			}
		};

		document.addEventListener('mousedown', clickEvent);

		return () => {
			document.removeEventListener('mousedown', clickEvent);
		};
	}, [showStartMenu]);

	return (
		<div
			className={clsx(
				showStartMenu && 'bg-gray-800',
				'relative flex justify-center w-12 h-full py-3 transition duration-150 hover:bg-gray-800'
			)}
		>
			<WindowsLogo
				ref={menuButtonRef}
				onClick={() => setShowStartMenu((prev) => !prev)}
				className='w-full h-full text-white'
			/>
			<AnimatePresence>
				{showStartMenu && (
					<motion.div
						ref={startMenuRef}
						initial={{ height: 500, opacity: 1 }}
						animate={{ height: 600, opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						className='absolute overflow-y-auto scrollbar-thumb-rounded-lg scrollbar-track-gray-900 scrollbar-thumb-gray-600 scrollbar-thin space-y-2 py-2 left-0 bg-gray-900 bottom-full h-[600px] w-[300px]'
					>
						{Array.from({ length: 20 }).map((_, i) => (
							<div
								className='flex items-center justify-start w-full h-12 px-4 py-1 space-x-4 text-white cursor-default hover:bg-gray-800'
								key={i}
							>
								<FontAwesomeIcon icon={faFolder} size='2x' className='text-yellow-500' />
								<div>Sample Folder #{i + 1}</div>
							</div>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
