<script lang="ts">
	import StyledButton from '../StyledButton.svelte';

	let modal: HTMLDialogElement;
</script>

<nav>
	<img src="/images/logo.svg" alt="Logo" class="logo" />

	<!-- Mobile -->
	<button class="hamburger" on:click={() => modal.showModal()}>
		<span /><span /><span />
	</button>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<dialog bind:this={modal} on:click|self|stopPropagation={() => modal.close()}>
		<a href="/"> Features </a>
		<a href="/"> Pricing </a>
		<a href="/"> Resources </a>
		<hr />
		<a href="/">Login</a>
		<a href="/"><StyledButton>Sing Up</StyledButton></a>
	</dialog>

	<!-- Desktop -->

	<div class="bar-nav">
		<div>
			<a href="/"> Features </a>
			<a href="/"> Pricing </a>
			<a href="/"> Resources </a>
		</div>
		<div>
			<a href="/">Login</a>
			<a href="/"><StyledButton>Sing Up</StyledButton></a>
		</div>
	</div>
</nav>

<style>
	nav {
		margin: 2rem var(--site-padding);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.hamburger {
		width: 1.3rem;
		aspect-ratio: 1;

		border: none;
		background: none;
		padding: 1px 0;

		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;

		& span {
			width: 100%;
			height: 3px;
			background-color: var(--clr-neutral-gViolet);
		}

		@media (width >= 1000px) {
			display: none;
		}
	}

	dialog {
		top: -10%;
		width: 100%;

		border: none;
		border-radius: 10px;
		background-color: var(--clr-primary-violet);

		&::backdrop {
			background-color: transparent;
		}

		& a {
			color: white;
			display: block;
			text-align: center;
			text-decoration: none;
			font-weight: bold;
			margin: 1.7em 0;
		}

		& hr {
			border: none;
			border-top: 1px solid var(--clr-neutral-gViolet);
		}
	}

	.bar-nav {
		width: 100%;
		margin-left: 3em;

		display: flex;
		justify-content: space-between;
		align-items: center;

		& div {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 3em;
		}

		& a {
			color: var(--clr-neutral-gViolet);
			text-decoration: none;
			font-weight: bold;
			font-size: 0.9rem;
		}

		@media (width < 1000px) {
			display: none;
		}
	}
</style>
