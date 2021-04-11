import { Window } from '../components/window/Window';
import { TaskBar } from './taskbar/TaskBar';

export function MainWindow() {
	return (
		<main
			className='relative flex flex-col w-screen h-screen bg-gray-700'
			style={{ backgroundImage: `url("/wallpaper.jpg")`, backgroundPosition: 'center' }}
		>
			<Window />
			<TaskBar />
		</main>
	);
}
