<script lang="ts">
	import StyledButton from '$lib/components/StyledButton.svelte';
	import { links } from '$lib/stores/links';
	import { fade, fly } from 'svelte/transition';

	let link = '';
	let error = '';

	const copyLink = (newLink: string) => {
		// Copy link
		navigator.clipboard.writeText(newLink);

		// Change state of button
		const newListElement = $links.find((li) => li.new === newLink);
		if (newListElement && !newListElement.copied) {
			links.update((ls) =>
				ls.map((li) => {
					if (li.new === newLink) {
						li.copied = true;
					}
					return li;
				})
			);
		}
	};

	const shortenLink = async () => {
		error = '';
		if (link.length === 0) {
			error = 'Please add a link';
			return;
		}

		const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`);
		const data = await res.json();

		if (data.ok) {
			const newLink = {
				old: link,
				new: data.result.full_short_link,
				copied: false
			};
			links.update((ls) => [newLink, ...ls]);
		} else {
			error = data.error;
		}

		link = '';
	};
</script>

<section aria-label="Link Shortener">
	<form on:submit|preventDefault={shortenLink}>
		<div class="field">
			<input
				type="text"
				name="link"
				id="link"
				placeholder="Shorten a link here..."
				bind:value={link}
			/>
			<label for="link" class="error" class:error-active={error}>{error}</label>
		</div>
		<div class="button-container">
			<StyledButton style="angular">Shorten&nbsp;It!</StyledButton>
		</div>
	</form>

	<ul>
		{#each $links as link (link.new)}
			<li in:fly={{ y: -75, duration: 700 }} out:fly={{ y: 75, duration: 900 }}>
				<p class="oldLink">{link.old}</p>
				<div>
					<a href={link.new} target="_blank" rel="noopener noreferrer" class="newLink">
						{link.new}
					</a>
					<div class="button-container">
						<StyledButton
							style="angular"
							color={link.copied ? 'violet' : 'cyan'}
							on:click={() => copyLink(link.new)}
						>
							{link.copied ? 'Copied!' : 'Copy'}
						</StyledButton>
					</div>
				</div>
			</li>
		{/each}
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

		& .button-container {
			@media (width >= 1000px) {
				width: 7rem;
			}
		}
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
