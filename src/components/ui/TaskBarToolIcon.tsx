import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';

interface Props {
	icon?: IconDefinition;
	children?: React.ReactNode;
	className?: string;
	onClick?: () => void;
}

export const TaskBarToolIcon = React.forwardRef<HTMLDivElement, Props>(
	({ icon, children, className, onClick }, ref) => {
		return (
			<div
				className={clsx(
					className,
					'flex items-center h-full px-2 text-white transition duration-150 cursor-default hover:bg-gray-800'
				)}
				onClick={onClick}
				ref={ref}
			>
				{icon && <FontAwesomeIcon icon={icon} size='sm' />}
				{children}
			</div>
		);
	}
);
