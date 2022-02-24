import "./App.css";
// import Reducer from "./components/Reducer";
import DisplayTheme from "./components/DisplayTheme";
import Navbar from "./components/Navbar";
import Setting from "./components/Setting";
import ToggleTheme from "./components/ToogleTheme";
import { AppProvider } from "./context/app-context";
import { ThemeProvider } from "./context/theme-context";

function App() {
    return (
        <div className="">
			<AppProvider>
				<ThemeProvider>
					<Navbar />
					<hr className="my-5"/>
					<Setting />
					<hr className="my-5"/>
					<DisplayTheme />
					<ToggleTheme />
					{/* <Reducer /> */}
				</ThemeProvider>
			</AppProvider>
        </div>
    );
}

export default App;
