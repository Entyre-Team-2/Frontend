import { React, useState } from "react";

function PatientInformation(props) {
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

	const data = props.data;
	const setData = props.setData;

	const handleChange = (event) => {
		var id = event.target.id;
		var value = event.target.value;

		if (id === "firstname") {
			setData({ ...data, firstname: value });
		} else if (id === "lastname") {
			setData({ ...data, lastname: value });
		} else if (id === "sex") {
			setData({ ...data, sex: value });
		} else if (id === "dob") {
			setData({ ...data, dob: value });
		} else if (id === "age") {
			setData({ ...data, age: value });
		} else if (id === "weight") {
			setData({ ...data, weight: value });
		} else if (id === "insuranceCompany") {
			setData({ ...data, insuranceCompany: value });
		} else if (id === "insuranceNumber") {
			setData({ ...data, insuranceNumber: value });
		}
	};

	const triggerSubmit = () => {
		console.log(data);
		fetch("http://localhost:5000/patients/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.text())
			.then((data) => {
				console.log("Success:", data);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
		props.setIndex(1);
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
					id="firstname"
					placeholder="First Name"
					style={styles.input}
					value={data.firstname}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="lastName"
					id="lastname"
					placeholder="Last Name"
					style={styles.input}
					value={data.lastname}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="sex"
					id="sex"
					placeholder="Sex"
					style={styles.input}
					value={data.sex}
					onChange={handleChange}
				/>
			</div>
			<div style={styles.inputFieldsContainer}>
				<input
					type="date"
					name="dob"
					id="dob"
					placeholder="Date of Birth"
					style={styles.dateInput}
					value={data.dob}
					onChange={handleChange}
				/>
				<input
					type="number"
					name="age"
					id="age"
					placeholder="Age"
					style={styles.input}
					value={data.age}
					onChange={handleChange}
				/>
				<input
					type="number"
					name="weight"
					id="weight"
					placeholder="Weight"
					style={styles.input}
					value={data.weight}
					onChange={handleChange}
				/>
			</div>
			<div style={styles.insuranceInputContainer}>
				<input
					type="text"
					name="insuranceCompany"
					id="insuranceCompany"
					placeholder="Insurace Company"
					style={styles.insuranceInput}
					value={data.insuranceCompany}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="insuranceNumber"
					id="insuranceNumber"
					placeholder="Insurance Number"
					style={styles.insuranceInput}
					value={data.insuranceNumber}
					onChange={handleChange}
				/>
			</div>
			<div style={styles.buttonContainer}>
				<button style={styles.button} onClick={triggerSubmit}>
					Next
				</button>
			</div>
		</div>
	);
}

export default PatientInformation;
