<script>
	import HeroBlock from '$lib/components/blocks/HeroBlock.svelte';
	import BlogCard from '$lib/components/cards/BlogCard.svelte';
	import EventCard from '$lib/components/cards/EventCard.svelte';
	import BenefitCard from '$lib/components/cards/BenefitCard.svelte';
	import { blogPosts } from '$lib/data/blogposts';
	import { events } from '$lib/data/events';
	import { benefits } from '$lib/data/benefits';
	import { ArrowRight } from 'lucide-svelte';

	import Scholarship from '$lib/images/other/ScholarshipRecipients.png';
	import CTA from '$lib/images/other/CTABg.png';
</script>

<HeroBlock></HeroBlock>
<div class="bg-neutral-50 md:pt-20">
	<div class="mx-auto grid max-w-screen-xl grid-cols-1 place-items-center md:grid-cols-2">
		<div class="prose order-first p-12 text-neutral-950 md:order-last">
			<h1 class="text-neutral-950">Empowering the Future of Agricultural Communications</h1>
			<h3 class="text-neutral-950">
				Over $608,000 in scholarships awarded to future ag communicators since 1977.
			</h3>
			<p>
				Since 1977, the NAFB Foundation has provided financial support and educational opportunities
				in the form of college scholarships to assist students in pursuit of careers in agricultural
				communications. More than $608,000 in scholarships have been awarded. In 2024, the NAFB
				Foundation is offering multiple $7,500 college scholarships and one $10,000 scholarship.
				This year’s recipients will be recognized at NAFB Convention this November in Kansas City,
				and each receives an expense-paid trip to attend the convention as part of the award. The
				application window for the 2024 NAFB Foundation Scholarship Program has closed. Please email
				info@nafb.com for additional information.
			</p>
			<button class="flex items-center gap-2 hover:text-blue-500"
				>Learn More <ArrowRight></ArrowRight></button
			>
		</div>
		<div class="relative h-full min-h-[600px] w-full py-12">
			<div class="absolute left-0 top-0 flex h-full w-full items-center justify-center">
				<img
					class="z-20 h-[500px] w-[400px] overflow-clip rounded-md object-cover"
					width="600"
					height="600"
					src={Scholarship}
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
			<h1 class="text-neutral-950">Streamline Your Media Planning with the NAFB Planner</h1>
			<h3 class="text-neutral-950">
				Your go-to resource for targeting key audiences and geographies with NAFB member data.
			</h3>
			<p>
				The NAFB Planner is a powerful media planning resource for media buyers, advertising and
				public relations professionals. The NAFB Planner combines critical data points to assist and
				expedite the media planning process. It provides users with necessary information to build a
				media plan targeting key geographies and audiences based on NAFB member stations and network
				affiliates.<br /><br /><a href="https://www.nafbplanner.com/#/login">Click here</a> here to create
				an account, and start using the NAFB Planner today. Remember to bookmark the site for quick access
				to saved geographies and NAFB member profiles.
			</p>
			<button class="flex items-center gap-2 hover:text-blue-500"
				>Create An Account <ArrowRight></ArrowRight></button
			>
		</div>
		<div class="relative h-full min-h-[500px] w-full py-12">
			<div class="absolute left-0 top-0 flex h-full w-full items-center justify-center">
				<iframe
					class="z-20 aspect-[16/9] w-full overflow-clip rounded-md object-cover"
					title="video"
					src="https://www.youtube.com/watch?v=DWs7SGK0dwQ"
					frameborder="0"
				></iframe>
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

<div class="relative bg-cover bg-fixed bg-center p-8" style="background-image: url({CTA});">
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
				The National Association of Farm Broadcasting is a 501(c)(6) professional organization whose
				mission is to lead, promote, and support growth in agricultural and rural broadcasting for
				the benefit of our members, audience, and industry. If you share our interest and purpose,
				we welcome your application for membership.
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

<style>
	.pattern1 {
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='Artboard-5' fill='%230a2d64' fill-rule='nonzero'%3E%3Cpath d='M6 18h12V6H6v12zM4 4h16v16H4V4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
	}
</style>
