<script>
	import StyledButton from '$lib/components/StyledButton.svelte';
</script>

<section aria-labelledby="boost">
	<h2 id="boost">Boost your links today</h2>
	<div class="button-container">
		<StyledButton>Get Started</StyledButton>
	</div>
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

		@media (width >= 1000px) {
			padding: 2em var(--site-padding);

			background-image: url('/images/bg-boost-desktop.svg');
		}
	}

	h2 {
		margin: 0.75em 0;

		@media (width >= 1000px) {
			font-size: 2rem;
			margin: 0.5em 0;
		}
	}

	.button-container {
		margin: auto;
		width: fit-content;
	}
</style>
