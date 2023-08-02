<script lang="ts">
	import Navigation from '$lib/sections/navigation.svelte';
	import Header from '$lib/sections/header.svelte';
	import LinkShortener from '$lib/sections/linkShortener.svelte';
	import Statistics from '$lib/sections/statistics.svelte';
	import GetStarted from '$lib/sections/getStarted.svelte';
	import Footer from '$lib/sections/footer.svelte';
</script>

<Navigation />

<Header />

<LinkShortener />

<Statistics />

<GetStarted />

<Footer />

<div class="attribution">
	Challenge by
	<a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">
		Frontend Mentor
	</a>
	. Coded by
	<a href="https://www.frontendmentor.io/profile/sutaC" target="_blank" rel="noopener noreferrer">
		Catus
	</a>.
</div>

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

		@media (width >= 1000px) {
			--site-padding: 10%;
		}
	}

	:global(*) {
		box-sizing: border-box;
		font-family: 'Poppins', sans-serif;
	}

	:global(html) {
		font-size: 18px;
		color: var(--clr-neutral-dBlue);
		scroll-behavior: smooth;
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

	/* Attribution */
	.attribution {
		width: 100%;
		position: fixed;
		left: 0;
		bottom: 0;
		font-size: 0.5rem;
		text-align: center;
	}
</style>
