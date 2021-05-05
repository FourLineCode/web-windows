import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { TaskBarPopup } from '../ui/TaskBarPopup';

export function SearchBox() {
	const [query, setQuery] = useState('');
	const [showSearchResult, setShowSearchResult] = useState(false);
	const searchBoxRef = useRef<HTMLFormElement>(null);
	const showQuery = useMemo(() => query !== '', [query]);

	useEffect(() => {
		if (!showSearchResult) {
			searchBoxRef.current?.reset();
			setQuery('');
		}
	}, [showSearchResult]);

	return (
		<form ref={searchBoxRef} className='relative'>
			<FontAwesomeIcon
				icon={faSearch}
				size='lg'
				className='absolute top-0 bottom-0 left-0 my-auto ml-2 text-gray-500'
			/>
			<input
				className='h-full pl-10 text-white transition-all bg-gray-800 border border-gray-700 focus:text-black bg w-80 focus:bg-white focus:outline-none focus:ring-theme-500'
				type='text'
				name='query'
				placeholder='Type here to search'
				autoComplete='off'
				onFocus={() => setShowSearchResult(true)}
				onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
					if (!showSearchResult) setShowSearchResult(true);
					setQuery(e.target.value);
				}}
			/>
			<TaskBarPopup
				visible={showSearchResult}
				setVisible={setShowSearchResult}
				buttonRef={searchBoxRef}
				height={600}
				className='w-[700px] h-[600px] overflow-hidden'
			>
				<div className='flex items-center w-full px-4 bg-gray-800 h-14'>
					<span className='flex items-center h-full px-3 text-xl text-white border-b-2 border-theme-500'>
						Search Results
					</span>
				</div>
				{showQuery && (
					<div className='flex w-full h-full'>
						<div className='bg-gray-200 w-72'>
							<div className='flex items-center p-4 space-x-4 truncate cursor-default line-clamp-1 hover:bg-theme-200'>
								<FontAwesomeIcon icon={faSearch} size='lg' className='text-gray-700' />
								<span className='text-lg'>{query}</span>
							</div>
						</div>
						<div className='flex-1 bg-white'></div>
					</div>
				)}
			</TaskBarPopup>
		</form>
	);
}
