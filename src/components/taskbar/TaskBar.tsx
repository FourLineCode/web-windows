import { faBatteryThreeQuarters, faChevronUp, faVolumeUp, faWifi } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import useCurrentTime from '../../hooks/useCurrentTime';
import { TaskBarAppIcon } from '../ui/TaskBarAppIcon';
import { TaskBarToolIcon } from '../ui/TaskBarToolIcon';
import { ActionCenter } from './ActionCenter';
import { SearchBox } from './SearchBox';
import { StartMenu } from './StartMenu';

export function TaskBar() {
	const [time, date] = useCurrentTime();

	return (
		<div className='flex w-full bg-gray-900 max-h-12'>
			<StartMenu />
			<SearchBox />
			<div className='flex flex-1 h-full'>
				<TaskBarAppIcon src='/apps/settings.png' name='settings' />
				<TaskBarAppIcon src='/apps/file-explorer.png' name='file-explorer' />
				<TaskBarAppIcon src='/apps/chrome.png' name='chrome' />
				<TaskBarAppIcon src='/apps/spotify.png' name='spotify' />
				<TaskBarAppIcon src='/apps/discord.webp' name='discord' />
				<TaskBarAppIcon src='/apps/vscode.png' name='vscode' />
				<TaskBarAppIcon src='/apps/windows-terminal.png' name='windows-terminal' />
			</div>
			<div className='flex items-center justify-end h-full w-96 '>
				<TaskBarToolIcon icon={faChevronUp} />
				<TaskBarToolIcon icon={faBatteryThreeQuarters} />
				<TaskBarToolIcon icon={faWifi} />
				<TaskBarToolIcon icon={faVolumeUp} />
				<TaskBarToolIcon>
					<div className='text-sm text-center'>
						<div>{time}</div>
						<div>{date}</div>
					</div>
				</TaskBarToolIcon>
				<ActionCenter />
			</div>
		</div>
	);
}
