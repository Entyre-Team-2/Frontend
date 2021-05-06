import React from "react";

function PatientDiagnosis() {
	const styles = {
		rootContainer: {
			display: "flex",
			flexDirection: "column",
			flexWrap: "nowrap",
			alignItems: "center",
			alignContent: "space-between",
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
            marginLeft: "0.5em"
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
        }
	};

	var patientName = "Owais Bin Asad";

	return (
		<div style={styles.rootContainer}>
			<div style={styles.heading}>
				<h2>Patient's Diagnosis</h2>
			</div>

			<div style={styles.patientName}>
				<span>Patient's Name:</span>
				<span style={styles.patientNameSpan}>{patientName}</span>
			</div>

			<div style={styles.diagnosisContainer}>
                <div style={styles.syntaxContainer}>
                    <p><strong>Syntax:</strong></p>
                    <p>
                        Diagnosis Name #1
                        <br />
                        Drug 1A, Strength, Form, Intake
                        <br />
                        Drug 1B, Strength, Form, Intake
                    </p>
                    <p>
                        &lt;blank line&gt;
                        <br />
                        &lt;blank line&gt;
                    </p>
                    <p>
                        Diagnosis Name #2
                        <br />
                        Drug 2A, Strength, Form, Intake
                        <br />
                        Drug 2B, Strength, Form, Intake
                    </p>
                </div>
				<textarea
					name="diagnosis"
					id="diagnosisTextarea"
					cols="100"
					rows="15"
					placeholder="Refer to the above shown syntax and enter diagnosis data here."></textarea>
			</div>

			<div>
				<button style={styles.button}>Preview</button>
			</div>
		</div>
	);
}

export default PatientDiagnosis;
