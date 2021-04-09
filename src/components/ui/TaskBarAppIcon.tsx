interface Props {
	src: string;
	name: string;
}

export function TaskBarAppIcon({ src, name }: Props) {
	return (
		<div className='transition duration-150 hover:bg-gray-800'>
			<img className='h-full px-3 py-2 w-14' src={src} alt={`${name}-icon`} />
		</div>
	);
}
