<nav>
	<img src="/images/logo.svg" alt="Logo" class="logo" />
	<button class="hamburger"><span /><span /><span /></button>
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
	}
</style>
