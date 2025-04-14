import { generateClient } from 'aws-amplify/api'
import { Schema } from '../amplify/data/resource'
import { useState } from 'react'

const client = generateClient<Schema>()

function App() {
	const [isLoading, setIsLoading] = useState(false)

	const createDonationCheckout = async () => {
		setIsLoading(true)
		try {
			const res = await client.mutations.createDonationCheckout({
				successUrl: `${window.location.origin}/success`,
				cancelUrl: `${window.location.origin}`,
			})

			if (res.data?.url) {
				window.location.href = res.data.url
			}
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<div className="min-h-screen bg-gradient-to-b from-base-100 to-base-200">
			{/* Easter Egg Pattern Background */}
			<div className="absolute inset-0 opacity-5 pointer-events-none">
				<div
					className="w-full h-full"
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0C13.432 0 0 13.432 0 30s13.432 30 30 30 30-13.432 30-30S46.568 0 30 0zm0 45c-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15 8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15z' fill='%23A78BFA' fill-opacity='0.4'/%3E%3C/svg%3E")`,
						backgroundSize: '60px 60px',
					}}
				/>
			</div>

			<main className="container mx-auto px-4 min-h-screen flex flex-col justify-center">
				<div className="lg:flex lg:flex-col lg:items-center lg:justify-center lg:min-h-screen">
					{/* Hero Section */}
					<div className="text-center mb-12 lg:mb-20">
						<h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent leading-tight mb-8">
							WCC Easter Donations
						</h1>
						<div className="stats stats-vertical md:stats-horizontal shadow bg-base-100/50 backdrop-blur-sm border-2 border-base-300 mx-auto mb-8">
							<div className="stat px-8">
								<div className="stat-value text-primary text-2xl md:text-3xl">
									April 19th
								</div>
								<div className="stat-desc text-base-content/70 text-lg">
									Saturday
								</div>
							</div>
							<div className="stat px-8">
								<div className="stat-value text-secondary text-2xl md:text-3xl">
									11 AM - 1 PM
								</div>
								<div className="stat-desc text-base-content/70 text-lg">
									Join us!
								</div>
							</div>
						</div>
						<p className="text-lg md:text-xl text-base-content/80 leading-relaxed max-w-2xl mx-auto mb-8">
							Help us spread joy this Easter season by supporting our community
							initiatives. Your generous donations will help bring smiles to
							those in need.
						</p>
						<button
							onClick={createDonationCheckout}
							className="btn btn-primary btn-lg text-primary-content font-semibold tracking-wide px-12 hover:scale-105 transition-transform duration-200 shadow-lg"
							disabled={isLoading}
						>
							{isLoading ? (
								<>
									<span className="loading loading-spinner loading-sm"></span>
									Processing...
								</>
							) : (
								'Make a Donation'
							)}
						</button>
					</div>

					{/* Features Section */}
					<div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto w-full">
						<div className="card bg-base-100/50 backdrop-blur-sm shadow-lg border-2 border-base-300 hover:shadow-xl transition-shadow">
							<div className="card-body p-6 items-center text-center">
								<div className="text-primary text-4xl mb-4">🌸</div>
								<h3 className="card-title text-lg font-bold text-primary">
									Community Support
								</h3>
								<p className="text-base-content/70">
									Essential support for local families
								</p>
							</div>
						</div>
						<div className="card bg-base-100/50 backdrop-blur-sm shadow-lg border-2 border-base-300 hover:shadow-xl transition-shadow">
							<div className="card-body p-6 items-center text-center">
								<div className="text-secondary text-4xl mb-4">🐰</div>
								<h3 className="card-title text-lg font-bold text-secondary">
									Easter Events
								</h3>
								<p className="text-base-content/70">
									Special activities for children
								</p>
							</div>
						</div>
						<div className="card bg-base-100/50 backdrop-blur-sm shadow-lg border-2 border-base-300 hover:shadow-xl transition-shadow">
							<div className="card-body p-6 items-center text-center">
								<div className="text-accent text-4xl mb-4">🥚</div>
								<h3 className="card-title text-lg font-bold text-accent">
									Local Impact
								</h3>
								<p className="text-base-content/70">
									Direct impact in our community
								</p>
							</div>
						</div>
					</div>
				</div>
			</main>

			{/* Footer */}
			<footer className="footer footer-center p-4 bg-base-200/50 backdrop-blur-sm text-base-content border-t border-base-300 mt-8">
				<div>
					<p className="text-base-content/60 text-sm">
						Copyright © {new Date().getFullYear()} - All rights reserved by
						Windsor Crest Club
					</p>
				</div>
			</footer>
		</div>
	)
}

export default App
