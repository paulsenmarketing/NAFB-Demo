import bauerBlogImage from '$lib/images/blog/Bauer.jpg';
import historianImage from '$lib/images/blog/Curt.jpg';
import echatImage from '$lib/images/blog/Lainey Kitzmann.jpg';

export const blogPosts = [
	{
		title: 'Bauer Travels to United Kingdom',
		date: '1 Nov 24',
		category: 'Airing on the Side of Agriculture',
		image: bauerBlogImage,
		href: '/',
		categoryIcon: 'Wheat'
	},
	{
		title: 'Meet NAFB Summer Intern Lainey Kitzmann',
		date: '26 Aug 24',
		category: 'Echats',
		image: echatImage,
		href: '/',
		categoryIcon: 'MessageSquare'
	},
	{
		title: 'September 2024 Historian Report: Curt Lancaster',
		date: '26 Sep 24',
		category: 'Historian Reports',
		image: historianImage,
		href: '/',
		categoryIcon: 'MicVocal'
	}
];
