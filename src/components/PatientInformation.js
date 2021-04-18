import React from "react";

function PatientInformation() {
	const styles = {
		rootContainer: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			width: "100%",
		},
		heading: {
			fontSize: "3.5em",
			fontWeight: 400,
		},
		inputFieldsContainer: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "space-between",
			width: "60em",
			marginBottom: "2em",
		},
		input: {
			width: "16em",
			backgroundColor: "transparent",
			outline: "none",
			border: "none",
			borderBottom: "1px solid white",
			caretColor: "white",
			color: "white",
			paddingBottom: "0.5em",
			fontSize: "1em",
		},
		dateInput: {
			width: "20em",
			backgroundColor: "transparent",
			outline: "none",
			border: "none",
			borderBottom: "1px solid white",
			caretColor: "white",
			color: "white",
			paddingBottom: "0.5em",
			fontSize: "1em",
		},
		insuranceInput: {
			width: "100%",
			marginBottom: "2em",
			backgroundColor: "transparent",
			outline: "none",
			border: "none",
			borderBottom: "1px solid white",
			caretColor: "white",
			color: "white",
			paddingBottom: "0.5em",
			fontSize: "1em",
		},
		insuranceInputContainer: {
			width: "60em",
			marginBottom: "2em",
		},
		headingContainer: {
			marginBottom: "2em",
		},
		buttonContainer: {
			width: "60em",
			display: "inline-flex",
			flexDirection: "row",
			justifyContent: "flex-end",
		},
		button: {
			color: "white",
			backgroundColor: "black",
			border: "none",
			outline: "none",
			fontSize: "1em",
			width: "8em",
			height: "2.5em",
			borderRadius: "0.9em",
			boxShadow: "0.3em 0.3em 0.1em rgba(0,0,0,0.25)",
		},
	};

	return (
		<div style={styles.rootContainer}>
			<div style={styles.headingContainer}>
				<h2 style={styles.heading}>Patient Information</h2>
			</div>
			<div style={styles.inputFieldsContainer}>
				<input
					type="text"
					name="firstName"
					id="firstName"
					placeholder="First Name"
					style={styles.input}
				/>
				<input
					type="text"
					name="lastName"
					id="lastName"
					placeholder="Last Name"
					style={styles.input}
				/>
				<input
					type="text"
					name="sex"
					id="sex"
					placeholder="Sex"
					style={styles.input}
				/>
			</div>
			<div style={styles.inputFieldsContainer}>
				<input
					type="date"
					name="dob"
					id="dob"
					placeholder="Date of Birth"
					style={styles.dateInput}
				/>
				<input
					type="number"
					name="age"
					id="age"
					placeholder="Age"
					style={styles.input}
				/>
				<input
					type="number"
					name="weight"
					id="weight"
					placeholder="Weight"
					style={styles.input}
				/>
			</div>
			<div style={styles.insuranceInputContainer}>
				<input
					type="text"
					name="insuranceCompany"
					id="insuranceCompany"
					placeholder="Insurace Company"
					style={styles.insuranceInput}
				/>
				<input
					type="number"
					name="insuranceNumber"
					id="insuranceNumber"
					placeholder="Insurance Number"
					style={styles.insuranceInput}
				/>
			</div>
			<div style={styles.buttonContainer}>
				<button style={styles.button}>Next</button>
			</div>
		</div>
	);
}

export default PatientInformation;
