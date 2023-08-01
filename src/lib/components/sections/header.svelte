<script lang="ts">
	import StyledButton from '../StyledButton.svelte';
</script>

<header>
	<img src="/images/illustration-working.svg" alt="Illustration working" />
	<h1>More than just shorter links</h1>
	<p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
	<StyledButton>Get Started</StyledButton>
</header>

<style>
	header {
		padding: 0 var(--site-padding);
		overflow: hidden;
		text-align: center;
	}

	img {
		width: 150%;
	}

	h1 {
		font-size: 2.25rem;
		line-height: 125%;
	}
</style>
