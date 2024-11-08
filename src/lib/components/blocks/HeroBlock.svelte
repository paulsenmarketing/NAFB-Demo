<script lang="ts">
	import { ArrowRight, ArrowLeft } from 'lucide-svelte';
</script>

<div class="flex w-full flex-col">
	<div
		style="background-image: url('https://picsum.photos/id/59/1200/800');"
		class="clip relative bg-cover bg-no-repeat md:-mb-20"
	>
		<!-- Overlay -->
		<div class="absolute inset-0 bg-black/65"></div>
		<div
			class="absolute right-28 top-1/2 cursor-pointer rounded-full p-4 outline outline-1 outline-white hover:bg-white/25"
		>
			<ArrowRight color="white"></ArrowRight>
		</div>
		<div
			class="absolute left-28 top-1/2 cursor-pointer rounded-full p-4 outline outline-1 outline-white hover:bg-white/25"
		>
			<ArrowLeft color="white"></ArrowLeft>
		</div>
		<div
			class="relative mx-auto grid max-w-screen-xl grid-cols-1 place-items-center md:grid-cols-2"
		>
			<div
				class="prose order-last flex min-h-[600px] flex-col justify-center p-12 text-white md:order-first"
			>
				<h1 class="text-white">Hero Content</h1>
				<h3 class="text-white">Subtext Content</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nemo sapiente deserunt
					reiciendis adipisci consequatur repellat cupiditate natus nam reprehenderit.
				</p>
				<button class="flex w-fit items-center gap-2">Get Started <ArrowRight></ArrowRight></button>
			</div>
		</div>
	</div>
</div>

<style>
	.clip {
		@media only screen and (min-width: 768px) {
			clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 91%);
		}
	}
</style>
