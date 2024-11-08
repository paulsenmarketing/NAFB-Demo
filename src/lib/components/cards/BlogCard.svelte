<script lang="ts">
	import Calendar from 'lucide-svelte/icons/calendar';
	import MessageSquare from 'lucide-svelte/icons/message-square';
	import Wheat from 'lucide-svelte/icons/wheat';
	import MicVocal from 'lucide-svelte/icons/mic-vocal';
	let {
		image,
		title,
		date,
		category,
		href
	}: { image: string; title: string; date: string; category: string; href: string } = $props();
</script>

{#snippet categoryIcon(category: string)}
	{#if category === 'Airing on the Side of Agriculture'}
		<Wheat></Wheat>
	{:else if category === 'Echats'}
		<MessageSquare></MessageSquare>
	{:else if category === 'Historian Reports'}
		<MicVocal></MicVocal>
	{/if}
{/snippet}

<a
	{href}
	class="flex w-full flex-col overflow-clip rounded-md shadow-md transition-transform hover:scale-[1.02] hover:shadow-lg"
>
	<img class="h-full max-h-60 w-full object-cover" src={image} alt={title} />
	<div class="prose flex flex-1 flex-col justify-between p-6">
		<h3>{title}</h3>
		<div class="flex justify-between gap-5 text-sm">
			<p class="flex items-center gap-2"><Calendar></Calendar>{date}</p>
			<p class="flex items-center gap-2">{@render categoryIcon(category)}{category}</p>
		</div>
	</div>
</a>
