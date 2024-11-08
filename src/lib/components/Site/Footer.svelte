<script lang="ts">
	import { Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-svelte';
</script>

<div class="bg-neutral-800 px-8">
	<div class="mx-auto flex flex-col gap-12 border-b border-b-gray-500">
		<div class="mt-8 flex items-center justify-center p-8">
			<div class="grid w-full grid-cols-6 text-white">
				<ul>
					<li>A</li>
					<li>A</li>
					<li>A</li>
					<li>A</li>
					<li>A</li>
				</ul>
				<ul>
					<li>B</li>
					<li>B</li>
					<li>B</li>
					<li>B</li>
					<li>B</li>
				</ul>
				<!-- Address info -->
				<ul>
					<li>C</li>
					<li>C</li>
					<li>C</li>
					<li>C</li>
					<li>C</li>
				</ul>
				<ul>
					<li>D</li>
					<li>D</li>
					<li>D</li>
					<li>D</li>
					<li>D</li>
				</ul>
				<ul>
					<li>E</li>
					<li>E</li>
					<li>E</li>
					<li>E</li>
					<li>E</li>
				</ul>
			</div>
		</div>
		<div class="flex flex-col items-start gap-8 p-8 text-white">
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium sequi est minima
				asperiores sunt aliquid aliquam quibusdam. Officiis corrupti quasi quia possimus, voluptates
				ipsa aliquam culpa velit ipsam natus. Libero!
			</p>
			<button>Call To Action</button>
		</div>
	</div>
	<div class="flex w-full justify-between py-8 text-white">
		<div>© 2024 NAFB. All rights reserved.</div>
		<div class="flex items-center gap-4">
			<Facebook color="white" size="30"></Facebook>
			<Twitter color="white" size="30"></Twitter>
			<Linkedin color="white" size="30"></Linkedin>
			<Youtube color="white" size="30"></Youtube>
			<Instagram color="white" size="30"></Instagram>
		</div>
	</div>
</div>
