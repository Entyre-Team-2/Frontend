import { React, useState, Fragment, useEffect } from "react";

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

	const [patients, setPatients] = useState([
		{
			name: "Owais",
		},
		{
			name: "Ananya",
		},
		{
			name: "Prabdit",
		},
		{
			name: "Advika",
		},
		{
			name: "Himanshi",
		},
	]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setPatients(data)
			});
	}, []);

	const [doctor, setDoctor] = useState("XYZ");

	const triggerNewPatient = () => {
		console.log("New Patient Triggered.");
	};

	const openPatientDetails = (name) => {
		console.log("Patient Details for:", name);
	};

	const triggerSignOut = () => {
		console.log("Sign out.");
	};

	return (
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
	);
}

export default Dashboard;
