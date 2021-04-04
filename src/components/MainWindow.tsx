import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import clsx from 'clsx';
import { WindowsLogo } from '../ui/WindowsLogo';

export function MainWindow() {
	const [showStartMenu, setShowStartMenu] = useState(false);

	return (
		<main
			className='flex flex-col w-screen h-screen bg-gray-700'
			style={{ backgroundImage: `url("./wallpaper.jpg")`, backgroundPosition: 'center' }}
		>
			<div className='flex-1'></div>
			<div className='w-full h-12 bg-gray-900'>
				<div
					onClick={() => setShowStartMenu((prev) => !prev)}
					className={clsx(
						showStartMenu && 'bg-gray-800',
						'relative flex justify-center w-12 h-full py-3 transition duration-150 hover:bg-gray-800'
					)}
				>
					<WindowsLogo className='w-full h-full text-white' />
					<AnimatePresence>
						{showStartMenu && (
							<motion.div
								initial={{ height: 500, opacity: 1 }}
								animate={{ height: 600, opacity: 1 }}
								exit={{ height: 0, opacity: 0 }}
								className='absolute overflow-y-auto space-y-2 py-2 left-0 bg-gray-900 bottom-full h-[600px] w-[300px]'
							>
								<div className='w-full h-12 px-2 py-1 hover:bg-gray-800'></div>
								<div className='w-full h-12 px-2 py-1 hover:bg-gray-800'></div>
								<div className='w-full h-12 px-2 py-1 hover:bg-gray-800'></div>
								<div className='w-full h-12 px-2 py-1 hover:bg-gray-800'></div>
								<div className='w-full h-12 px-2 py-1 hover:bg-gray-800'></div>
								<div className='w-full h-12 px-2 py-1 hover:bg-gray-800'></div>
								<div className='w-full h-12 px-2 py-1 hover:bg-gray-800'></div>
								<div className='w-full h-12 px-2 py-1 hover:bg-gray-800'></div>
								<div className='w-full h-12 px-2 py-1 hover:bg-gray-800'></div>
								<div className='w-full h-12 px-2 py-1 hover:bg-gray-800'></div>
								<div className='w-full h-12 px-2 py-1 hover:bg-gray-800'></div>
								<div className='w-full h-12 px-2 py-1 hover:bg-gray-800'></div>
								<div className='w-full h-12 px-2 py-1 hover:bg-gray-800'></div>
								<div className='w-full h-12 px-2 py-1 hover:bg-gray-800'></div>
								<div className='w-full h-12 px-2 py-1 hover:bg-gray-800'></div>
								<div className='w-full h-12 px-2 py-1 hover:bg-gray-800'></div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</main>
	);
}
