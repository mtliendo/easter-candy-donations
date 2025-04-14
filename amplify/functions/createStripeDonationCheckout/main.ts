import Stripe from 'stripe'
import type { Schema } from '../../data/resource'

const stripe = new Stripe(process.env.STRIPE_WCC_SECRET_KEY as string)

export const handler: Schema['createDonationCheckout']['functionHandler'] =
	async () => {
		try {
			const session = await stripe.checkout.sessions.create({
				line_items: [
					{
						price: process.env.STRIPE_PRICE_ID as string,
						quantity: 1,
					},
				],
				mode: 'payment',
				success_url: process.env.STRIPE_SUCCESS_URL as string,
				cancel_url: process.env.STRIPE_CANCEL_URL as string,
			})

			if (!session.url) {
				throw new Error('No URL returned from Stripe')
			}

			return {
				url: session.url,
			}
		} catch (error) {
			console.error(error)
			return {
				url: process.env.STRIPE_CANCEL_URL as string,
			}
		}
	}
