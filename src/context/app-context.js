import { createContext, useContext, useEffect, useReducer  } from "react";

const AppContext = createContext({});

const useAppContext = () => {
    return useContext(AppContext)
}

const reducer = (state, action) => {
	switch(action.type) {
		case "updateUser":
			return {...state, user: action.payload}
		default:
			throw new Error("Unexpected Type")
	}
}

const initialState ={
	user: {},
}

const AppProvider = ({children}) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	useEffect(() => {
		const user = {
			name: "Ivan Rizky",
			avatar: "https://randomuser.me/api/portraits/men/75.jpg"
		}
		dispatch({type: "updateUser", payload: user})
	}, [])
	const appContextValue = [state, dispatch]

    return (
        <AppContext.Provider value={appContextValue}>{children}</AppContext.Provider>
    )
}

export { AppContext, AppProvider, useAppContext };
