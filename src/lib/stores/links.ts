import { browser } from '$app/environment';
import { writable, type Writable } from 'svelte/store';

export type Link = {
	old: string;
	new: string;
	copied: boolean;
};

export const links: Writable<Link[]> = writable([]);

// Saving and reading links from LocalStorage
if (browser) {
	const savedLinkList = localStorage.getItem('linkList');
	if (savedLinkList) {
		links.set(JSON.parse(savedLinkList) ?? []);
	}

	links.subscribe((ls) => {
		localStorage.setItem('linkList', JSON.stringify(ls) ?? '[]');
	});
}

// Keeps max ammount of links at 3
links.subscribe((ls) => {
	if (ls.length > 3) {
		let newLinkList = ls;
		newLinkList.splice(ls.length - 1, 1);
		links.set(newLinkList);
	}
});
