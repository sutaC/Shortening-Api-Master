<script lang="ts">
	import StyledButton from '$lib/components/StyledButton.svelte';
</script>

<header>
	<img src="/images/illustration-working.svg" alt="Illustration working" />
	<div>
		<h1>More than just shorter links</h1>
		<p>
			Build your brand’s recognition and get detailed insights on how your links are performing.
		</p>
		<div class="button-container">
			<StyledButton>Get Started</StyledButton>
		</div>
	</div>
</header>

<style>
	header {
		padding: 0 var(--site-padding);
		overflow: hidden;
		text-align: center;
		position: relative;

		@media (width >= 1000px) {
			text-align: left;
			margin-top: 5em;

			display: flex;
			flex-direction: row-reverse;
			justify-content: space-between;
		}
	}

	img {
		width: 150%;

		@media (width >= 1000px) {
			width: 60%;
			translate: 35% -10%;
			flex-shrink: 0;
		}
	}

	h1 {
		font-size: 2.25rem;
		line-height: 125%;

		@media (width >= 1000px) {
			font-size: 3rem;
			margin: 0;
		}
	}

	p {
		@media (width >= 1000px) {
			margin: 0;
			margin-bottom: 2em;
		}
	}

	.button-container {
		width: fit-content;

		@media (width < 1000px) {
			margin: auto;
		}
	}
</style>
