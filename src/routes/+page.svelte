<script>
	import BlogCard from '$lib/components/cards/BlogCard.svelte';
	import EventCard from '$lib/components/cards/EventCard.svelte';
	import BenefitCard from '$lib/components/cards/BenefitCard.svelte';
	import { blogPosts } from '$lib/data/blogposts';
	import { events } from '$lib/data/events';
	import { benefits } from '$lib/data/benefits';
	import { ArrowRight } from 'lucide-svelte';
</script>

<div class="flex flex-col">
	<!-- Hero -->
	<!-- Fields: -->
	<!-- Header -->
	<!-- Subheader -->
	<!-- Paragraph -->
	<!-- Button Text -->
	<div class="clip bg-neutral-800 md:-mb-20">
		<div class="mx-auto grid max-w-screen-xl grid-cols-1 place-items-center md:grid-cols-2">
			<div class="prose order-last p-12 text-white md:order-first">
				<h1 class="text-white">Hero Content</h1>
				<h3 class="text-white">Subtext Content</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nemo sapiente deserunt
					reiciendis adipisci consequatur repellat cupiditate natus nam reprehenderit.
				</p>
				<button>Get Started</button>
			</div>
			<div class="py-12">
				<img
					class="aspect-1 min-h-[500px] w-full overflow-clip rounded-md object-cover md:w-[400px]"
					width="600"
					height="600"
					src="https://picsum.photos/id/65/600/600"
					alt=""
				/>
			</div>
		</div>
	</div>

	<!-- Text/Media Block -->
	<!-- Fields: -->
	<!-- Title -->
	<!-- Subheader -->
	<!-- Paragraph -->
	<!-- Button Text -->
	<div class="bg-neutral-50 md:pt-20">
		<div class="mx-auto grid max-w-screen-xl grid-cols-1 place-items-center md:grid-cols-2">
			<div class="prose order-first p-12 text-neutral-950 md:order-last">
				<h1 class="text-neutral-950">Hero Content</h1>
				<h3 class="text-neutral-950">Subtext Content</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nemo sapiente deserunt
					reiciendis adipisci consequatur repellat cupiditate natus nam reprehenderit.
				</p>
				<button>Get Started</button>
			</div>
			<div class="relative h-full min-h-[600px] w-full py-12">
				<div class="absolute left-0 top-0 flex h-full w-full items-center justify-center">
					<img
						class="z-20 h-[500px] w-[400px] overflow-clip rounded-md object-cover"
						width="600"
						height="600"
						src="https://picsum.photos/id/234/600/600"
						alt=""
					/>
				</div>
				<div class="pattern1 absolute left-5 top-5 z-10 h-1/3 w-1/3 opacity-20">
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
						><g fill-rule="evenodd"
							><g fill="#0A2D64" fill-rule="nonzero"><path d="M6 18h12V6H6v12zM4 4h16v16H4V4z" /></g
							></g
						></svg
					>
				</div>
				<div
					class="absolute bottom-5 right-5 z-10 h-1/3 w-1/3 rounded-lg bg-brand-blue opacity-20"
				></div>
			</div>
		</div>
	</div>
	<!-- Content Video -->
	<div class="bg-neutral-50">
		<div class="mx-auto grid max-w-screen-xl grid-cols-1 place-items-center md:grid-cols-2">
			<div class="prose order-last p-12 text-neutral-950 md:order-first">
				<h1 class="text-neutral-950">Hero Content</h1>
				<h3 class="text-neutral-950">Subtext Content</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nemo sapiente deserunt
					reiciendis adipisci consequatur repellat cupiditate natus nam reprehenderit.
				</p>
				<button>Get Started</button>
			</div>
			<div class="relative h-full min-h-[500px] w-full py-12">
				<div class="absolute left-0 top-0 flex h-full w-full items-center justify-center">
					<img
						class="z-20 aspect-[4/3] w-3/4 overflow-clip rounded-md object-cover"
						width="600"
						height="600"
						src="https://picsum.photos/id/234/600/600"
						alt=""
					/>
				</div>
				<div
					class="pattern1 absolute right-5 top-5 z-10 aspect-1 h-1/3 overflow-clip rounded-full opacity-20"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
						><g fill-rule="evenodd"
							><g fill="#0A2D64" fill-rule="nonzero"><path d="M6 18h12V6H6v12zM4 4h16v16H4V4z" /></g
							></g
						></svg
					>
				</div>
				<div
					class="absolute bottom-5 left-5 z-10 aspect-1 h-1/3 rounded-full bg-brand-blue opacity-20"
				></div>
			</div>
		</div>
	</div>
	<!-- CTA -->

	<!-- Blog Block -->
	<div class="p-8">
		<div class="mx-auto max-w-screen-xl">
			<div class="prose mb-8">
				<div class="flex">
					<h4 class="text-brand-blue"><span>—</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blog</h4>
				</div>
				<h1>Dive in to our rich blog content!</h1>
			</div>
			<div class="grid w-full grid-cols-1 gap-6 p-8 md:grid-cols-2 lg:grid-cols-3">
				{#each blogPosts as post}
					<BlogCard {...post} />
				{/each}
			</div>
		</div>
	</div>

	<div
		class="relative bg-cover bg-fixed bg-center p-8"
		style="background-image: url('https://picsum.photos/id/47/2000/2000');"
	>
		<!-- Overlay -->
		<div class="absolute inset-0 bg-black/65"></div>

		<!-- Content -->
		<div class="relative mx-auto flex min-h-80 max-w-screen-xl items-center justify-end">
			<div class="prose-lg flex flex-col items-end justify-center">
				<h4 class="text-white">
					<span>—</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Membership
				</h4>
				<h1 class="text-right text-white">Learn more about NAFB membership!</h1>
				<p class="pl-4 font-bold text-white">
					The National Association of Farm Broadcasting is a 501(c)(6) professional organization
					whose mission is to lead, promote, and support growth in agricultural and rural
					broadcasting for the benefit of our members, audience, and industry. If you share our
					interest and purpose, we welcome your application for membership.
				</p>
				<button
					class="ml-4 w-fit rounded-md bg-blue-400 px-6 py-2 font-bold text-white hover:bg-blue-500"
					>Apply Now</button
				>
			</div>
		</div>
	</div>

	<!-- Events Block -->
	<div class="p-8">
		<div class="mx-auto max-w-screen-xl">
			<div class="prose mb-8">
				<div class="flex">
					<h4 class="text-brand-blue"><span>—</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Events</h4>
				</div>
				<h1>Check out our events!</h1>
			</div>
			<div class="grid w-full grid-cols-1 gap-6 p-8 md:grid-cols-2 lg:grid-cols-3">
				{#each events as event}
					<EventCard {...event} />
				{/each}
			</div>
		</div>
	</div>

	<!-- Contact Form -->
	<div class="p-8">
		<div class="mx-auto grid max-w-screen-xl grid-cols-1 md:grid-cols-2">
			<img class="rounded-md" src="https://picsum.photos/id/234/600/600" alt="alt" />

			<div class="prose flex h-full w-full flex-col justify-center px-12">
				<h1>Send us a message!</h1>
				<p>Getin touch with a person who cares!</p>
				<form class="" action="">
					<div class="flex w-full gap-8">
						<div class="w-1/2">
							<label for="firstName">Name</label>
							<input class="w-full" id="firstName" type="text" />
						</div>
						<div class="w-1/2">
							<label for="firstName">Email</label>
							<input class="w-full" id="firstName" type="email" />
						</div>
					</div>
					<div class="flex w-full flex-col">
						<label for="message">Message</label>
						<textarea name="" id="message"></textarea>
					</div>
					<button
						class="ml-auto mt-12 flex items-center gap-2 font-bold text-brand-blue"
						type="submit">Send <ArrowRight></ArrowRight></button
					>
				</form>
			</div>
		</div>
	</div>

	<!-- Benefits -->
	<div class="p-8">
		<div class="prose mx-auto flex max-w-screen-xl flex-col">
			<div class="flex">
				<h4 class="text-brand-blue">
					<span>—</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;How We Help You
				</h4>
			</div>
			<h1>Benefits of Membership.</h1>

			<div class="grid w-full grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
				<!-- card -->
				{#each benefits as benefit}
					<BenefitCard {...benefit}></BenefitCard>
				{/each}
			</div>
		</div>
	</div>

	<div>Footer</div>
</div>

<style>
	.clip {
		@media only screen and (min-width: 768px) {
			clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 91%);
		}
	}
	.pattern1 {
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='Artboard-5' fill='%230a2d64' fill-rule='nonzero'%3E%3Cpath d='M6 18h12V6H6v12zM4 4h16v16H4V4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
	}
</style>
