<section aria-labelledby="statistics">
	<h2 id="statistics">Advanced Statistics</h2>
	<p>Track how your links are performing across the web with our advanced statistics dashboard.</p>

	<div class="stats-container">
		<div class="stats" style="--_icon: url('/images/icon-brand-recognition.svg')">
			<h3>Brand Recognition</h3>
			<p>
				Boost your brand recognition with each click. Generic links don’t mean a thing. Branded
				links help instil confidence in your content.
			</p>
		</div>
		<div class="stats" style="--_icon: url('/images/icon-detailed-records.svg')">
			<h3>Detailed Records</h3>
			<p>
				Gain insights into who is clicking your links. Knowing when and where people engage with
				your content helps inform better decisions.
			</p>
		</div>
		<div class="stats" style="--_icon: url('/images/icon-fully-customizable.svg')">
			<h3>Fully Customizable</h3>
			<p>
				Improve brand awareness and content discoverability through customizable links,
				supercharging audience engagement.
			</p>
		</div>
		<div class="line" />
	</div>
</section>

<style>
	section {
		text-align: center;
		padding: 0 var(--site-padding);

		& > h2 {
			@media (width >= 1000px) {
				font-size: 2rem;
			}
		}

		& > p {
			max-width: 50ch;
			margin: auto;
		}
	}

	.stats-container {
		position: relative;
		height: 100%;

		@media (width >= 1000px) {
			margin-bottom: 2em;

			display: flex;
			justify-content: space-between;
			align-items: baseline;
			gap: 2em;
		}

		& .line {
			content: '';
			display: block;

			width: 0.5rem;
			height: 100%;
			background-color: var(--clr-primary-cyan);
			z-index: -1;

			position: absolute;
			top: 0;
			left: 50%;
			translate: -50% 0;

			@media (width >= 1000px) {
				width: 100%;
				height: 0.5rem;

				left: 0;
				top: 50%;
				translate: 0 -50%;
			}
		}
	}

	.stats {
		background-color: white;
		position: relative;
		border-radius: 5px;

		margin: 4em 0;
		padding: 2em;
		padding-top: 3em;

		&::after {
			content: var(--_icon);

			width: 25%;
			max-width: 4.5rem;
			aspect-ratio: 1;

			background-color: var(--clr-primary-violet);
			border-radius: 100%;

			position: absolute;
			left: 50%;
			top: 0;
			translate: -50% -40%;

			display: flex;
			justify-content: center;
			align-items: center;
		}

		@media (width >= 1000px) {
			text-align: left;

			&:nth-child(2) {
				translate: 0 10%;
			}
			&:nth-child(3) {
				translate: 0 20%;
			}

			&::after {
				left: 20%;
			}
		}
	}
</style>
