<script>
	import StyledButton from '$lib/components/StyledButton.svelte';
</script>

<section aria-label="Link Shortener">
	<form>
		<div class="field">
			<input type="text" name="link" id="link" placeholder="Shorten a link here..." />
			<label for="link" class="error">XxX</label>
		</div>
		<div class="button-container">
			<StyledButton style="angular">Shorten&nbsp;It!</StyledButton>
		</div>
	</form>

	<ul>
		<li>
			<p class="oldLink">Lorem ipsum dolor sit amet.</p>
			<div>
				<a href="//" class="newLink">Lorem, ipsum dolor.</a>
				<div class="button-container">
					<StyledButton style="angular">Copy</StyledButton>
				</div>
			</div>
		</li>
		<li>
			<p class="oldLink">Quasi rem facilis delectus commodi.</p>
			<div>
				<a href="//" class="newLink">Rerum, odit repellat!</a>
				<div class="button-container">
					<StyledButton style="angular">Copy</StyledButton>
				</div>
			</div>
		</li>
		<li>
			<p class="oldLink">Totam beatae numquam cumque ut.</p>
			<div>
				<a href="//" class="newLink">Tempora, doloremque nam?</a>
				<div class="button-container">
					<StyledButton style="angular">Copy</StyledButton>
				</div>
			</div>
		</li>
	</ul>
</section>

<style>
	section {
		padding: 3rem var(--site-padding);

		--_section-padding: 1rem;
		--_section-bdRadius: 10px;
	}

	form {
		width: 100%;
		background-color: var(--clr-primary-violet);
		padding: var(--_section-padding);
		border-radius: var(--_section-bdRadius);

		background-image: url('/images/bg-shorten-mobile.svg');
		background-repeat: no-repeat;
		background-size: contain;
		background-position: top -3em right;

		@media (width >= 1000px) {
			background-image: url('/images/bg-shorten-desktop.svg');
			background-position: center;
			background-size: cover;

			padding: 2em;
			display: flex;
			justify-content: space-between;
			align-items: baseline;
			gap: 1em;
		}

		& input {
			width: 100%;
			border: 0.2rem solid transparent;
			border-radius: 5px;

			padding: 0.5em;

			font-size: 1rem;
		}
		&:has(.error-active) input {
			border-color: var(--clr-secondary-red);
		}

		& .button-container {
			@media (width >= 1000px) {
				width: fit-content;
			}
		}
	}

	.error {
		font-style: italic;
		font-size: 0.65rem;
		color: var(--clr-secondary-red);
		padding: 0;

		&:not(.error-active) {
			display: none;
		}
	}

	.field {
		padding-bottom: var(--_section-padding);
		width: 100%;
	}

	/* Links */

	ul {
		list-style: none;
		padding: 0;
		margin: var(--_section-padding) 0;
	}

	li {
		background-color: white;
		margin: var(--_section-padding) 0;
		border-radius: var(--_section-bdRadius);

		@media (width >= 1000px) {
			display: flex;
			justify-content: space-between;
			align-items: baseline;
		}

		& > div {
			@media (width >= 1000px) {
				display: flex;
				align-items: baseline;
				gap: 1em;
			}
		}

		& > * {
			padding: calc(var(--_section-padding) / 2);
			margin: 0;

			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		& .oldLink {
			width: 100%;

			border-bottom: 1px solid var(--clr-neutral-gray);

			color: var(--clr-neutral-dViolet);

			@media (width >= 1000px) {
				width: fit-content;
				border: none;
			}
		}
		& .newLink {
			display: block;
			margin-bottom: 0.5em;
			text-decoration: none;

			color: var(--clr-primary-cyan);
		}
	}
</style>
