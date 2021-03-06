import axios from 'axios';

export const SELECT_LANGUAGE = 'select_language';
export const SIDE_NAV_OPEN = 'side_nav_open';

export function selectLanguage(language){
	const language_request = axios.get(`/resources/${language}.json`);

	return {
		type: SELECT_LANGUAGE,
		payload: language_request
	};
}

export function toggleSideNav(sideNavStatus){
	return {
		type: SIDE_NAV_OPEN,
		payload: sideNavStatus
	};
}