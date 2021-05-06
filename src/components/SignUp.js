import { React, useState } from "react";

function SignUp() {
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
		form: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			width: "60%",
		},
		row: {
			display: "inline-flex",
			flexDirection: "row",
			justifyContent: "space-between",
			width: "100%",
			marginBottom: "1.5em",
		},
		input: {
			backgroundColor: "transparent",
			outline: "none",
			border: "none",
			borderBottom: "1px solid white",
			caretColor: "white",
			color: "white",
			paddingBottom: "0.5em",
			fontSize: "1em",
			width: "40%",
		},
		passwordInput: {
			backgroundColor: "transparent",
			outline: "none",
			border: "none",
			borderBottom: "1px solid white",
			caretColor: "white",
			color: "white",
			paddingBottom: "0.5em",
			fontSize: "1em",
			width: "100%",
		},
		button: {
			backgroundColor: "white",
			color: "black",
			outline: "none",
			border: "none",
			width: "10em",
			height: "2em",
			borderRadius: "2em",
			fontSize: "1.5em",
			marginTop: "2em",
		},
	};

	const [data, setData] = useState({
		firstname: "",
		lastname: "",
		email: "",
		hospitalName: "",
		password: "",
		repeatPassword: "",
	});

	const onChangeData = (event) => {
		var id = event.target.name;
		var value = event.target.value;

		if (id === "firstname") {
			setData({ ...data, firstname: value });
		} else if (id === "lastname") {
			setData({ ...data, lastname: value });
		} else if (id === "email") {
			setData({ ...data, email: value });
		} else if (id === "hospital") {
			setData({ ...data, hospitalName: value });
		} else if (id === "password") {
			setData({ ...data, password: value });
		} else if (id === "repeatPassword") {
			setData({ ...data, repeatPassword: value });
		}
	};

	const triggerSignUp = () => {
		console.log(data);
	};

	return (
		<div style={styles.rootContainer}>
			<div>
				<h2 style={styles.heading}>Sign Up</h2>
			</div>
			<div style={styles.form}>
				<div style={styles.row}>
					<input
						type="text"
						name="firstname"
						id="firstname"
						placeholder="First Name"
						style={styles.input}
						value={data.firstname}
						onChange={onChangeData}
					/>
					<input
						type="text"
						name="lastname"
						id="lastname"
						placeholder="Last Name"
						style={styles.input}
						value={data.lastname}
						onChange={onChangeData}
					/>
				</div>
				<div style={styles.row}>
					<input
						type="text"
						name="email"
						id="email"
						placeholder="Email"
						style={styles.input}
						value={data.email}
						onChange={onChangeData}
					/>
					<input
						type="text"
						name="hospital"
						id="hospital"
						placeholder="Hospital Name"
						style={styles.input}
						value={data.hospitalName}
						onChange={onChangeData}
					/>
				</div>
				<div style={styles.row}>
					<input
						type="password"
						name="password"
						id="password"
						placeholder="Password"
						style={styles.passwordInput}
						value={data.password}
						onChange={onChangeData}
					/>
				</div>
				<div style={styles.row}>
					<input
						type="password"
						name="repeatPassword"
						id="repeatPassword"
						placeholder="Repeat Password"
						style={styles.passwordInput}
						value={data.repeatPassword}
						onChange={onChangeData}
					/>
				</div>
			</div>
			<div>
				<button style={styles.button} onClick={triggerSignUp}>
					Submit
				</button>
			</div>
		</div>
	);
}

export default SignUp;
