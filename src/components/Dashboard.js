import { React, useState } from "react";

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

	const triggerNewPatient = () => {
		console.log("New Patient Triggered.");
	};

    const openPatientDetails = (name) => {
        console.log("Patient Details for:", name);
    }

	return (
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
						<div style={styles.patientRow} key={index} onClick={() => openPatientDetails(patient.name)}>
							<span>{index + 1}.</span>
							<span style={styles.patientName}>
								{patient.name}
							</span>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Dashboard;
