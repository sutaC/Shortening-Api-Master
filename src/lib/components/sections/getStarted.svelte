<script>
	import StyledButton from '$lib/components/StyledButton.svelte';
</script>

<section aria-labelledby="boost">
	<h2 id="boost">Boost your links today</h2>
	<StyledButton>Get Started</StyledButton>
</section>

<style>
	section {
		width: 100%;

		background-color: var(--clr-primary-violet);
		text-align: center;
		color: white;

		padding: 5em var(--site-padding);

		background-image: url('/images/bg-boost-mobile.svg');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}

	h2 {
		margin: 0.75em 0;
	}
</style>
