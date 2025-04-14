import { type ClientSchema, a, defineData } from '@aws-amplify/backend'
import { createStripeDonationCheckout } from '../functions/createStripeDonationCheckout/resource'

const schema = a.schema({
	Donation: a
		.model({
			content: a.string(),
		})
		.authorization((allow) => [allow.guest()]),
	createDonationCheckout: a
		.mutation()
		.handler(a.handler.function(createStripeDonationCheckout))
		.returns(a.customType({ url: a.url() }))
		.authorization((allow) => [allow.guest()]),
})

export type Schema = ClientSchema<typeof schema>

export const data = defineData({
	schema,
	authorizationModes: {
		defaultAuthorizationMode: 'identityPool',
	},
})
