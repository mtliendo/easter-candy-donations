function DonationSuccess() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-base-100 to-base-200 flex flex-col items-center justify-center p-4">
			{/* Success Animation Container */}
			<div className="relative w-24 h-24 mb-8">
				<div className="absolute inset-0 rounded-full border-4 border-success animate-ping opacity-25"></div>
				<div className="absolute inset-0 flex items-center justify-center">
					<span className="text-5xl">🎉</span>
				</div>
			</div>

			{/* Thank You Message */}
			<div className="card bg-base-100/50 backdrop-blur-sm shadow-xl border-2 border-base-300 max-w-2xl w-full text-center p-8">
				<h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-success via-primary to-secondary">
					Thank You for Your Donation!
				</h1>

				<p className="text-xl text-base-content/80 mb-8">
					Your generosity will help bring joy to our community this Easter
					season.
				</p>

				<div className="divider"></div>

				{/* Event Details */}
				<div className="mb-8">
					<h2 className="text-2xl font-semibold text-primary mb-4">
						Event Details
					</h2>
					<div className="stats stats-vertical md:stats-horizontal shadow bg-base-100/50">
						<div className="stat">
							<div className="stat-value text-primary text-2xl">April 19th</div>
							<div className="stat-desc">Saturday</div>
						</div>
						<div className="stat">
							<div className="stat-value text-secondary text-2xl">
								11 AM - 1 PM
							</div>
							<div className="stat-desc">Join us!</div>
						</div>
					</div>
				</div>

				{/* Next Steps */}
				<div className="grid gap-4 md:grid-cols-2 mb-8">
					<div className="card bg-base-200/50 p-6">
						<h3 className="font-bold text-lg text-accent mb-2">
							Save the Date
						</h3>
						<p className="text-base-content/70">
							Add the event to your calendar and join us for a wonderful Easter
							celebration.
						</p>
					</div>
					<div className="card bg-base-200/50 p-6">
						<h3 className="font-bold text-lg text-accent mb-2">
							Share the Joy
						</h3>
						<p className="text-base-content/70">
							Tell your friends and family about our Easter event and help
							spread the word.
						</p>
					</div>
				</div>

				{/* Return Home Button */}
				<div className="flex justify-center">
					<a
						href="/"
						className="btn btn-primary btn-lg text-primary-content font-semibold tracking-wide px-12 hover:scale-105 transition-transform duration-200"
					>
						Return Home
					</a>
				</div>
			</div>
		</div>
	)
}

export default DonationSuccess
