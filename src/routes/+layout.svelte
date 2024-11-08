<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import Navigation from '$lib/components/Site/Navigation.svelte';
	import Footer from '$lib/components/Site/Footer.svelte';
</script>

<Navigation></Navigation>

{@render children()}

<Footer></Footer>
