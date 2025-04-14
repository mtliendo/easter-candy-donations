import { defineFunction, secret } from '@aws-amplify/backend'

export const createStripeDonationCheckout = defineFunction({
	name: 'create-stripe-donation-checkout',
	entry: './main.ts',
	environment: {
		STRIPE_PRICE_ID: 'price_1RDqYYG5YxJSKaGYD6SwVrzN',
		STRIPE_WCC_SECRET_KEY: secret('STRIPE_WCC_SECRET_KEY'),
	},
})
