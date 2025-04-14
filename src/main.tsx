import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Amplify } from 'aws-amplify'
import awsConfig from '../amplify_outputs.json'
import { BrowserRouter, Route, Routes } from 'react-router'
import DonationSuccess from './DonationSuccess.tsx'
Amplify.configure(awsConfig)

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/success" element={<DonationSuccess />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
)
