<footer>
	<h2>Shortly</h2>

	<div class="description">
		<ul>
			<li><h3>Features</h3></li>
			<li><a href="/">Link Shortening</a></li>
			<li><a href="/">Branded Links</a></li>
			<li><a href="/">Analytics</a></li>
		</ul>
		<ul>
			<li><h3>Resources</h3></li>
			<li><a href="/">Blog</a></li>
			<li><a href="/">Developers</a></li>
			<li><a href="/">Support</a></li>
		</ul>
		<ul>
			<li><h3>Company</h3></li>
			<li><a href="/">About</a></li>
			<li><a href="/">Our Team</a></li>
			<li><a href="/">Careers</a></li>
			<li><a href="/">Contact</a></li>
		</ul>

		<div class="social">
			<a href="http://facebook.com" target="_blank" rel="noopener noreferrer"
				><img src="/images/icon-facebook.svg" alt="Facebook" /></a
			>
			<a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
				<img src="/images/icon-twitter.svg" alt="Twitter" /></a
			>
			<a href="http://pinterest.com" target="_blank" rel="noopener noreferrer"
				><img src="/images/icon-pinterest.svg" alt="Pinterest" /></a
			>
			<a href="http://instagram.com" target="_blank" rel="noopener noreferrer"
				><img src="/images/icon-instagram.svg" alt="Instagram" /></a
			>
		</div>
	</div>
</footer>

<style>
	footer {
		padding: 2em var(--site-padding);

		text-align: center;
		color: white;
		background-color: var(--clr-neutral-dViolet);

		@media (width >= 1000px) {
			display: flex;
			justify-content: space-between;
		}
	}

	h2 {
		font-size: 2rem;
	}

	.description {
		@media (width >= 1000px) {
			display: flex;
			justify-content: space-between;
			align-items: start;
			gap: 5em;

			text-align: left;
		}
	}

	ul {
		list-style: none;
		padding: 0;
		font-size: 0.75rem;
	}

	h3 {
		margin: 2.25em 0 1em;
	}

	li {
		margin: 0.5em 0;

		& a {
			color: var(--clr-neutral-gViolet);
			text-decoration: none;

			&:hover,
			&:focus {
				color: var(--clr-primary-cyan);
			}
		}
	}

	.social {
		display: flex;
		justify-content: space-around;
		align-items: center;
		max-width: 70%;
		margin: 3em auto 0;

		@media (width >= 1000px) {
			gap: 1.5em;
		}
	}
</style>
