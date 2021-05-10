import { React, useState, Fragment, useEffect } from "react";
import PatientDetails from "./PatientDetails";

function Dashboard() {
	const styles = {
		rootContainer: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
		},
		heading: {
			fontSize: "3.5em",
			fontWeight: 400,
		},
		body: {
			width: "50%",
		},
		patientRow: {
			background: "rgba(14,13,13,0.5)",
			marginBottom: "1em",
			padding: "0.75em 2em",
			width: "100%",
			borderRadius: "1.5em",
		},
		patientName: {
			marginLeft: "2em",
		},
		plusSign: {
			background: "rgba(0,0,0,0.75)",
			color: "white",
			border: "none",
			outline: "none",
			padding: "0.45em 0.75em",
			borderRadius: "100%",
			marginRight: "2em",
		},
		nav: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "space-between",
			padding: "1em",
		},
		signOutButton: {
			backgroundColor: "white",
			color: "black",
			outline: "none",
			border: "none",
			width: "6em",
			padding: "0.5em",
			borderRadius: "2em",
		},
		greeting: {
			fontSize: "1.25em",
		},
	};

	const [patients, setPatients] = useState([]);
	const [patientData, setPatientData] = useState([]);

	useEffect(() => {
		fetch("http://localhost:8000/api/diagnosis")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);

				setPatientData(data);

				var temp = [];
				data.map(item => {
					var temp2 = item.firstname + " " + item.lastname;
					temp.push({name: temp2});
				});

				setPatients(temp);
			});
	}, []);

	const [doctor, setDoctor] = useState("XYZ");
	const [index, setIndex] = useState(0);
	const [selectedPatientData, setSelectedPatientData] = useState({});

	const triggerNewPatient = () => {
		console.log("New Patient Triggered.");
		window.location.href = "/newPatient";
	};

	const openPatientDetails = (name) => {
		console.log("Patient Details for:", name);
		// Set appropriate patient data here instead of just name
		var temp = {
			riskScore: "",
			interactions: []
		};
		
		for(var patient of patientData) {
			if ((patient.firstname + " " + patient.lastname) === name) {
				temp.riskScore = patient.riskScore;
				temp.interactions = patient.interactions;
				break;
			}
		}

		setSelectedPatientData(temp);
		setIndex(1);
	};

	const triggerSignOut = () => {
		console.log("Sign out.");
		window.location.href = "/";
	};

	return (
		index === 0 ? (
		<Fragment>
			<nav style={styles.nav}>
				<span style={styles.greeting}>
					Hi, <strong>Dr. {doctor}</strong>
				</span>
				<button style={styles.signOutButton} onClick={triggerSignOut}>
					Sign Out
				</button>
			</nav>
			<div style={styles.rootContainer}>
				<div>
					<h2 style={styles.heading}>Patients</h2>
				</div>
				<div style={styles.body}>
					<div style={styles.patientRow} onClick={triggerNewPatient}>
						<span style={styles.plusSign}>+</span>
						<span>New Patient</span>
					</div>
					{patients.map((patient, index) => {
						return (
							<div
								style={styles.patientRow}
								key={index}
								onClick={() =>
									openPatientDetails(patient.name)
								}>
								<span>{index + 1}.</span>
								<span style={styles.patientName}>
									{patient.name}
								</span>
							</div>
						);
					})}
				</div>
			</div>
		</Fragment>
		) : <PatientDetails data={selectedPatientData}></PatientDetails>
	);
}

export default Dashboard;
