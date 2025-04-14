import { generateClient } from 'aws-amplify/api'
import { Schema } from '../amplify/data/resource'

const client = generateClient<Schema>()

function App() {
	const createDonationCheckout = async () => {
		const res = await client.mutations.createDonationCheckout()

		if (res.data?.url) {
			window.open(res.data.url, '_blank')
		}
	}

	return (
		<>
			<button onClick={() => createDonationCheckout()}>
				Create Checkout session
			</button>
		</>
	)
}

export default App
