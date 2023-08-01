<script lang="ts">
	import Navigation from '$lib/components/sections/navigation.svelte';
	import Header from '$lib/components/sections/header.svelte';
	import LinkShortener from '$lib/components/sections/linkShortener.svelte';
	import Statistics from '$lib/components/sections/statistics.svelte';
	import GetStarted from '$lib/components/sections/getStarted.svelte';
	import Footer from '$lib/components/sections/footer.svelte';
</script>

<Navigation />

<Header />

<LinkShortener />

<Statistics />

<GetStarted />

<Footer />

<style>
	/* Global */
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');

	:root {
		--clr-primary-cyan: hsl(180, 66%, 49%);
		--clr-primary-violet: hsl(257, 27%, 26%);
		--clr-secondary-red: hsl(0, 87%, 67%);
		--clr-neutral-gray: hsl(0, 0%, 75%);
		--clr-neutral-gViolet: hsl(257, 7%, 63%);
		--clr-neutral-dBlue: hsl(255, 11%, 22%);
		--clr-neutral-dViolet: hsl(260, 8%, 14%);

		--site-padding: 1rem;
	}

	:global(*) {
		box-sizing: border-box;
		font-family: 'Poppins', sans-serif;
	}

	:global(html) {
		font-size: 18px;
		color: var(--clr-neutral-dBlue);
	}

	:global(body) {
		background-color: aliceblue;
		overflow-x: hidden;
		padding: 0;
		margin: 0;
	}

	:global(p) {
		color: var(--clr-neutral-gViolet);
	}
</style>
