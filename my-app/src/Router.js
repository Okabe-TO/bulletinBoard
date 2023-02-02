/* ページの遷移を司るルーター */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ThreadList from "./ThreadList";

function Router() {
	return(
		<BrowserRouter>
			<Routes>
				<Route />
				<Route />
			</Routes>
		</BrowserRouter>
	)
}

export default Router