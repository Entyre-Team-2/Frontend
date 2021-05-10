import { React, useState } from "react";
import PatientInformation from "./PatientInformation";
import PatientDiagnosis from "./PatientDiagnosis";

function diagnosisParser(diagnosisText) {
	console.log(diagnosisText.split("\n"));
	return diagnosisText.split("\n");
}

function NewPatientController() {
	const [index, setIndex] = useState(0);
	const [patientInfo, setPatientInfo] = useState({
		firstname: "",
		lastname: "",
		sex: "",
		dob: "",
		age: "",
		weight: "",
		insuranceCompany: "",
		insuranceNumber: "",
	});

	const [patientDiagnosis, setPatientDiagnosis] = useState("");

	const submit = () => {
		setPatientInfo({
			firstname: "",
			lastname: "",
			sex: "",
			dob: "",
			age: "",
			weight: "",
			insuranceCompany: "",
			insuranceNumber: "",
		});
		setPatientDiagnosis("");

		// POST REQUEST

		var diagnosticData = diagnosisParser(patientDiagnosis);
		console.log(diagnosticData);

		var counter = 0;
		var finalData = [];
		var temp = {
			name: "",
			drugs: [],
		};
		for (var data of diagnosticData) {
			if (data === "") {
				// RESET
				counter = 0;
				finalData.push(temp);
				temp = {
					name: "",
					drugs: [],
				};
			} else {
				if (counter === 0) {
					// Diagnosis Name
					temp.name = data;
					counter++;
				} else if (counter > 0) {
					// DRUG CASE
					temp.drugs.push(data);
				}
			}
		}

		counter = 0;
		finalData.push(temp);
		temp = {
			name: "",
			drugs: [],
		};

		const postData = [patientInfo, finalData];

		fetch("http://localhost:8000/api/patients", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(postData),
		})
			.then((response) => response.text())
			.then((data) => {
				console.log("Success:", data);
			})
			.catch((error) => {
				console.error("Error:", error);
			});

		window.location.href = "/dashboard";
	};

	return index === 0 ? (
		<PatientInformation
			setIndex={setIndex}
			data={patientInfo}
			setData={setPatientInfo}></PatientInformation>
	) : (
		<PatientDiagnosis
			setIndex={setIndex}
			data={patientDiagnosis}
			setData={setPatientDiagnosis}
			submit={submit}></PatientDiagnosis>
	);
}

export default NewPatientController;
