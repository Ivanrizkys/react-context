import { useAppContext } from "../context/app-context";

const Setting = () => {
    const [state, dispatch] = useAppContext()
    const settingHandler = (e) => {
        dispatch({
            type: "updateUser",
            payload:{
                ...state.user,
                name: e.target.value
            }
        })
    }
    return (
        <div>
            <input className="mx-auto block outline" type="text" placeholder="Setting" onChange={settingHandler} value={state.user.name ?? ""}/>
        </div>
    )
}

export default Setting;
