import React from 'react'

export const StateContext = React.createContext();

export const StateProvider = ({ children }) => {
	const [companyName, setCompanyName] = React.useState("")
	const [clientNumber, setClientNumber] = React.useState("")
	const [serverResponse, setServerResponse] = React.useState({ en: "", de: "" })

	return (
		<StateContext.Provider
			value={{
				companyName,
				clientNumber,
				serverResponse,
				setCompanyName,
				setClientNumber,
				setServerResponse
			}}
		>
			{children}
		</StateContext.Provider>
	)
}