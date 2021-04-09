import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

interface Props {
	children?: React.ReactNode;
	className?: string;
	visible: boolean;
	setVisible: (arg: boolean) => void;
	buttonRef: React.RefObject<any>;
	height: number;
}

// NOTE: Parent element must have relative property
// NOTE: Add width and height in className property
export function TaskBarPopup({ children, className, visible, setVisible, buttonRef, height }: Props) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!visible || !process.browser) return;

		const clickEvent = (e: MouseEvent) => {
			if (!ref.current?.contains(e.target as Node) && !buttonRef.current?.contains(e.target as Node)) {
				setVisible(false);
			}
		};

		const escEvent = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setVisible(false);
			}
		};

		document.addEventListener('mousedown', clickEvent);
		document.addEventListener('keydown', escEvent);

		return () => {
			document.removeEventListener('mousedown', clickEvent);
			document.removeEventListener('keydown', escEvent);
		};
	}, [visible]);

	return (
		<AnimatePresence>
			{visible && (
				<motion.div
					ref={ref}
					initial={{ height: height - height * 0.2, opacity: 1 }}
					animate={{ height: height, opacity: 1 }}
					exit={{ height: 0, opacity: 0 }}
					className={clsx(className, 'absolute left-0 bg-gray-900 bottom-full')}
				>
					{children}
				</motion.div>
			)}
		</AnimatePresence>
	);
}
