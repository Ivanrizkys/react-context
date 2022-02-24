import { useReducer } from "react";

const reducer = (state, action) => {
    switch(action.type) {
        case "increment":
            return {...state, count: state.count + action.payload}
        case "decrement":
            return {...state, count: state.count - action.payload}
        case "toggle":
            return {...state, theme: state.theme === "Light" ? "Dark" : "Light"}
        default:
            throw new Error('Unexpected action')
    }
}

const initialState = {
    count: 0,
    theme: "Light"
}

const Reducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <div className="flex justify-center">
                <button onClick={() => dispatch({type: "increment", payload: 2})} className="px-5 py-1 rounded-sm bg-black text-white">+</button>
                <span className="mx-3">{state.count}</span>
                <button onClick={() => dispatch({type: "decrement", payload: 2})} className="px-5 py-1 rounded-sm bg-black text-white">-</button>
            </div>
            <p>{state.theme}</p>
            <button onClick={() => dispatch({type: "toggle"})} className="px-5 py-1 rounded-sm bg-gray-500 text-black">Toggle Theme</button>
        </>
    )
}

export default Reducer;