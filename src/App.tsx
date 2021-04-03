import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import wallpaper from '../assets/w10-wallpaper.jpg';

export function App() {
	const [showStartMenu, setShowStartMenu] = useState(false);

	return (
		<main
			className='flex flex-col w-screen h-screen bg-gray-700'
			style={{ backgroundImage: `url(${wallpaper})`, backgroundPosition: 'center' }}
		>
			<div className='flex-1'></div>
			<div className='w-full h-12 bg-gray-900'>
				<div
					onClick={() => setShowStartMenu((prev) => !prev)}
					className='relative flex justify-center w-12 h-full py-3 transition duration-150 hover:bg-gray-800'
				>
					<img src='../assets/w10-logo.png' alt='start-menu' />
					<AnimatePresence>
						{showStartMenu && (
							<motion.div
								initial={{ y: 600, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								exit={{ y: 600, opacity: 0 }}
								className='absolute left-0 bg-gray-900 bottom-full h-[600px] w-72'
							></motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</main>
	);
}
