import { React, Fragment } from "react";

function PatientDiagnosis(props) {
	const styles = {
		rootContainer: {
			display: "flex",
			flexDirection: "column",
			flexWrap: "nowrap",
			alignItems: "center",
			alignContent: "space-between",
		},
		heading: {
			fontSize: "3em",
			fontWeight: 400,
		},
		patientNameSpan: {
			marginLeft: "2em",
		},
		patientName: {
			margin: "1em 0em",
		},
		diagnosisContainer: {
			marginBottom: "1em",
		},
		syntaxContainer: {
			fontSize: "0.8em",
			marginLeft: "0.5em",
		},
		button: {
			backgroundColor: "black",
			color: "white",
			outline: "none",
			border: "none",
			width: "8em",
			height: "2.5em",
			borderRadius: "0.9em",
			boxShadow: "0.3em 0.3em 0.1em rgba(0,0,0,0.25)",
		},
		textarea: {
			outline: "none"
		},
		backButton: {
			backgroundColor: "white",
			color: "black",
			outline: "none",
			border: "none",
			width: "6em",
			padding: "0.5em",
			borderRadius: "2em",
			marginLeft: "1em",
			marginTop: "1em"
		}
	};

	var patientName = "Owais Bin Asad";

	const diagnosisText = props.data;
	const setDiagnosisText = props.setData;

	const handleChange = (event) => {
		setDiagnosisText(event.target.value);
	};

	const triggerBack = () => {
		props.setIndex(0);
	}

	return (
		<Fragment>
			<nav>
				<button style={styles.backButton} onClick={triggerBack}>Back</button>
			</nav>
			<div style={styles.rootContainer}>
				<div>
					<h2 style={styles.heading}>Patient's Diagnosis</h2>
				</div>


				<div style={styles.diagnosisContainer}>
					<div style={styles.syntaxContainer}>
						<p>
							<strong>Syntax:</strong>
						</p>
						<p>
							Diagnosis Name #1
							<br />
							Drug 1A
							<br />
							Drug 1B
						</p>
						<p>
							&lt;blank line&gt;
						</p>
						<p>
							Diagnosis Name #2
							<br />
							Drug 2A
							<br />
							Drug 2B
						</p>
					</div>
					<textarea
						name="diagnosis"
						id="diagnosisTextarea"
						cols="100"
						rows="15"
						placeholder="Refer to the above shown syntax and enter diagnosis data here."
						style={styles.textarea}
						value={diagnosisText}
						onChange={handleChange}></textarea>
				</div>

				<div>
					<button style={styles.button} onClick={props.submit}>Submit</button>
				</div>
			</div>
		</Fragment>
	);
}

export default PatientDiagnosis;
