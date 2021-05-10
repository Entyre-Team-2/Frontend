import "./App.css";
import LandingPage from "./components/LandingPage";
import SignUp from "./components/SignUp";
import SignUpPharmacist from "./components/SignUpPharmacist";
import Login from "./components/Login";
import PatientInformation from "./components/PatientInformation";
import PatientDiagnosis from "./components/PatientDiagnosis";
import Dashboard from "./components/Dashboard";
import PatientDetails from "./components/PatientDetails";
import NewPatientController from "./components/NewPatientController";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useState} from "react";

function App() {

	return (
		<Router>
			<Switch>
				<Route exact path="/signUp">
					<SignUp></SignUp>
				</Route>
				<Route exact path="/">
					<Login></Login>
				</Route>
				<Route exact path="/dashboard">
					<Dashboard></Dashboard>
				</Route>
				<Route exact path="/newPatient">
					<NewPatientController></NewPatientController>
				</Route>
				<Route exact path="/patientDetails">
					<PatientDetails></PatientDetails>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
