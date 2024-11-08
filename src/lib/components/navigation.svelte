<script>
	import logo from '$lib/images/logo.png';
	import { Search } from 'lucide-svelte';
</script>

<div class="w-full bg-neutral-800 px-8 text-white">
	<div class="lg:jusify-around mx-auto flex max-w-screen-xl items-center justify-between py-4">
		<img class="h-24" src={logo} alt="NAFB Logo" />
		<div class="hidden gap-4 md:flex lg:gap-6">
			<a class="hover:text-blue-400" href="/">About</a>
			<a class="hover:text-blue-400" href="/">Events</a>
			<a class="hover:text-blue-400" href="/">News</a>
			<a class="hover:text-blue-400" href="/">Membership</a>
			<a class="hover:text-blue-400" href="/">Foundation</a>
			<a class="hover:text-blue-400" href="/">My NAFB</a>
		</div>
		<div class="flex gap-8">
			<a class="hover:text-blue-400" href="/"><Search></Search></a>
			<a class="hover:text-blue-400" href="/">Contact</a>
		</div>
	</div>
</div>
