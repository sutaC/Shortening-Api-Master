<script lang="ts">
	export let style: 'rounded' | 'angular' = 'rounded';
	export let color: 'cyan' | 'violet' = 'cyan';
</script>

<button on:click class={style + ' clr-' + color}>
	<slot />
</button>

<style>
	button {
		font-weight: bold;
		border: none;
		color: white;

		width: 100%;
		padding: 0.6em 2em;
	}

	.rounded {
		font-size: 1.125rem;
		border-radius: 2rem;
	}

	.angular {
		font-size: 0.9rem;
		border-radius: 10px;
	}

	.clr-cyan {
		background-color: var(--clr-primary-cyan);
		&:hover,
		&:focus {
			background-color: color-mix(in srgb, var(--clr-primary-cyan) 90%, white 100%);
		}
		&:active {
			background-color: var(--clr-primary-violet);
		}
	}

	.clr-violet {
		background-color: var(--clr-primary-violet);
		&:hover,
		&:focus {
			background-color: color-mix(in srgb, var(--clr-primary-violet) 90%, white 100%);
		}
		&:active {
			background-color: var(--clr-primary-cyan);
		}
	}
</style>
