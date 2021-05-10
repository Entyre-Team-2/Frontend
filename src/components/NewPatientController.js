import { React, useState } from "react";
import PatientInformation from "./PatientInformation";
import PatientDiagnosis from "./PatientDiagnosis";

function diagnosisParser(diagnosisText) {
	console.log(diagnosisText.split("\n"));
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
		diagnosisParser(patientDiagnosis);
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
		window.location.href = "/";
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
