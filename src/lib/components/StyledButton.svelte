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

		width: 100%;
		padding: 0.6em 2em;

		&:hover,
		&:focus {
			background-color: color-mix(in srgb, var(--clr-primary-cyan) 90%, white 100%);
		}
		&:active,
		&:disabled {
			background-color: var(--clr-primary-violet);
		}
	}

	.rounded {
		font-size: 1.125rem;
		border-radius: 2rem;
	}

	.angular {
		font-size: 0.9rem;
		border-radius: 10px;
	}
</style>
