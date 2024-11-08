<script lang="ts">
	import { ArrowRight, GraduationCap, RadioTower, Handshake, Users } from 'lucide-svelte';
	let { icon, title, description }: { icon: string; title: string; description: string } = $props();
</script>

{#snippet benefitIcon(icon: string)}
	{#if icon === 'RadioTower'}
		<RadioTower color="#0A2D64" size="60"></RadioTower>
	{:else if icon === 'Users'}
		<Users color="#0A2D64" size="60"></Users>
	{:else if icon === 'GraduationCap'}
		<GraduationCap color="#0A2D64" size="60"></GraduationCap>
	{:else if icon === 'Handshake'}
		<Handshake color="#0A2D64" size="60"></Handshake>
	{/if}
{/snippet}

<div
	class="flex h-full w-full flex-col items-center justify-between rounded-md bg-white px-4 py-8 text-center shadow-md transition-transform hover:scale-[1.02] hover:shadow-lg"
>
	<div class="flex items-center justify-center">{@render benefitIcon(icon)}</div>
	<h3 class="h-20">{title}</h3>
	<p>
		{description}
	</p>
	<button class="mx-auto flex items-center gap-2">Learn More <ArrowRight></ArrowRight></button>
</div>
