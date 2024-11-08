<script>
	import logo from '$lib/images/logo.png';
	import { Search } from 'lucide-svelte';
</script>

<div class="w-full bg-white px-8 text-brand-blue">
	<div class="lg:jusify-around mx-auto flex max-w-screen-xl items-center justify-between py-4">
		<img class="h-24" src={logo} alt="NAFB Logo" />
		<div class="hidden gap-4 font-bold md:flex lg:gap-6">
			<a class="hover:text-blue-600" href="/">About</a>
			<a class="hover:text-blue-600" href="/">Events</a>
			<a class="hover:text-blue-600" href="/">News</a>
			<a class="hover:text-blue-600" href="/">Membership</a>
			<a class="hover:text-blue-600" href="/">Foundation</a>
			<a class="hover:text-blue-600" href="/">My NAFB</a>
		</div>
		<div class="flex gap-8">
			<a class="hover:text-blue-600" href="/"><Search></Search></a>
			<a class="hover:text-blue-600" href="/">Contact</a>
		</div>
	</div>
</div>
