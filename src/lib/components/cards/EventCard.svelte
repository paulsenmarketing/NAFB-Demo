<script lang="ts">
	import Calendar from 'lucide-svelte/icons/calendar';
	import { MapPin } from 'lucide-svelte';
	let {
		image,
		title,
		date,
		location,
		locale,
		href
	}: {
		image: string;
		title: string;
		date: string;
		location: string;
		locale: string;
		href: string;
	} = $props();
</script>

<a
	{href}
	class="flex w-full flex-col overflow-clip rounded-md shadow-md transition-transform hover:scale-[1.02] hover:shadow-lg"
>
	<img class="h-full max-h-60 w-full object-contain" src={image} alt={title} />
	<div class="prose flex flex-1 flex-col justify-between p-6">
		<h3>{title}</h3>
		<div class="flex justify-between gap-5 text-sm">
			<p class="flex items-center gap-2"><Calendar></Calendar>{date}</p>
			<p class="flex items-center gap-2"><MapPin></MapPin>{location}, {locale}</p>
		</div>
	</div>
</a>
