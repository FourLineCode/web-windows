import React from 'react';
import { TaskBarAppIcon } from '../ui/TaskBarAppIcon';
import { SearchBox } from './SearchBox';
import { StartMenu } from './StartMenu';

export function TaskBar() {
	return (
		<div className='flex w-full bg-gray-900 max-h-12'>
			<StartMenu />
			<SearchBox />
			<div className='flex flex-1 w-full h-full'>
				<TaskBarAppIcon src='/apps/settings.png' name='settings' />
				<TaskBarAppIcon src='/apps/file-explorer.png' name='file-explorer' />
				<TaskBarAppIcon src='/apps/chrome.png' name='chrome' />
				<TaskBarAppIcon src='/apps/spotify.png' name='spotify' />
				<TaskBarAppIcon src='/apps/discord.webp' name='discord' />
				<TaskBarAppIcon src='/apps/vscode.png' name='vscode' />
				<TaskBarAppIcon src='/apps/windows-terminal.png' name='windows-terminal' />
			</div>
		</div>
	);
}
