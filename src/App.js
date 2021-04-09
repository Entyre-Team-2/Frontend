import "./App.css";
import LandingPage from "./components/LandingPage";
import SignUpDoctor from "./components/SignUpDoctor";
import SignUpPharmacist from "./components/SignUpPharmacist";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/signUpDoctor">
					<SignUpDoctor></SignUpDoctor>
				</Route>
				<Route path="/signUpPharmacist">
					<SignUpPharmacist></SignUpPharmacist>
				</Route>
				<Route path="/">
					<LandingPage></LandingPage>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
