import { env } from '$amplify/env/create-stripe-donation-checkout'
import Stripe from 'stripe'
import type { Schema } from '../../data/resource'

const stripe = new Stripe(env.STRIPE_WCC_SECRET_KEY as string)

export const handler: Schema['createDonationCheckout']['functionHandler'] =
	async (event) => {
		try {
			const session = await stripe.checkout.sessions.create({
				line_items: [
					{
						price: env.STRIPE_PRICE_ID as string,
						quantity: 1,
					},
				],
				mode: 'payment',
				success_url: event.arguments.successUrl,
				cancel_url: event.arguments.cancelUrl,
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
				url: event.arguments.cancelUrl,
			}
		}
	}
