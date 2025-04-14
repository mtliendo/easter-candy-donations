import { createStripeDonationCheckout } from './functions/createStripeDonationCheckout/resource'
import { defineBackend } from '@aws-amplify/backend'
import { auth } from './auth/resource'
import { data } from './data/resource'

defineBackend({
	auth,
	data,
	createStripeDonationCheckout,
})
