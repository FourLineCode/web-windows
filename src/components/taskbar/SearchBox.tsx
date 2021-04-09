export function SearchBox() {
	const handleSearch = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.target);
		const query = formData.get('query');

		console.log(query);
	};

	return (
		<form onSubmit={handleSearch}>
			{/* focus lost reset value */}
			<input
				className='h-full text-white transition-all bg-gray-800 border border-gray-700 focus:text-black bg w-80 focus:bg-white focus:outline-none focus:ring-theme-500'
				type='text'
				name='query'
				placeholder='Type here to search'
				autoComplete='off'
			/>
		</form>
	);
}
