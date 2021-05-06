import React from "react";

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
			width: "50%",
			display: "inline-flex",
			flexDirection: "column",
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
		},
	};

	return (
		<div style={styles.rootContainer}>
			<div>
				<h2 style={styles.heading}>Doctors</h2>
			</div>
			<div style={styles.form}>
				<p>Name</p>
				<input
					type="text"
					name="name"
					id="nameField"
					style={styles.input}
				/>

				<p>Email Address</p>
				<input
					type="text"
					name="email"
					id="emailField"
					style={styles.input}
				/>

				<p>Password</p>
				<input
					type="password"
					name="password"
					id="passwordField"
					style={styles.input}
				/>

				<p>Repeat Password</p>
				<input
					type="password"
					name="repeatPassword"
					id="repeatPasswordField"
					style={styles.input}
				/>
			</div>
		</div>
	);
}

export default SignUp;
