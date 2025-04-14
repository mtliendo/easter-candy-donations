import { defineFunction, secret } from '@aws-amplify/backend'

export const createStripeDonationCheckout = defineFunction({
	name: 'create-stripe-donation-checkout',
	entry: './main.ts',
	environment: {
		STRIPE_PRICE_ID: process.env.STRIPE_PRICE_ID as string,
		STRIPE_SUCCESS_URL: process.env.STRIPE_SUCCESS_URL as string,
		STRIPE_CANCEL_URL: process.env.STRIPE_CANCEL_URL as string,
		STRIPE_WCC_SECRET_KEY: secret('STRIPE_WCC_SECRET_KEY'),
	},
})
