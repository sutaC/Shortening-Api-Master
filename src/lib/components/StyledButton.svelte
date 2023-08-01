<script lang="ts">
	export let style: 'rounded' | 'angular' = 'rounded';
</script>

<button on:click class={style}>
	<slot />
</button>

<style>
	button {
		background-color: var(--clr-primary-cyan);
		font-weight: bold;
		border: none;
		color: white;

		padding: 0.75em 2em;
	}

	.rounded {
		font-size: 1.125rem;
		border-radius: 2rem;
	}

	.angular {
		font-size: 0.9rem;
		width: 100%;
		border-radius: 10px;
	}
</style>
