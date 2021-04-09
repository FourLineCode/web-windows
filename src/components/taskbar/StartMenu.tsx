import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React, { useRef, useState } from 'react';
import { TaskBarPopup } from '../ui/TaskBarPopup';
import { WindowsLogo } from '../ui/WindowsLogo';

export function StartMenu() {
	const [showStartMenu, setShowStartMenu] = useState(false);
	const menuButtonRef = useRef<SVGSVGElement>(null);

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
			<TaskBarPopup
				visible={showStartMenu}
				setVisible={setShowStartMenu}
				buttonRef={menuButtonRef}
				height={600}
				className='w-[300px] h-[600px] overflow-y-auto py-2 space-y-2 scrollbar-thumb-rounded-lg scrollbar-track-gray-900 scrollbar-thumb-gray-600 scrollbar-thin'
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
			</TaskBarPopup>
		</div>
	);
}
