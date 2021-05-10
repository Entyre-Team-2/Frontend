import "./App.css";
import LandingPage from "./components/LandingPage";
import SignUp from "./components/SignUp";
import SignUpPharmacist from "./components/SignUpPharmacist";
import Login from "./components/Login";
import PatientInformation from './components/PatientInformation';
import PatientDiagnosis from './components/PatientDiagnosis';
import Dashboard from "./components/Dashboard";
import PatientDetails from "./components/PatientDetails"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/signUp">
					<SignUp></SignUp>
				</Route>
				<Route path="/">
					<PatientDetails></PatientDetails>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
