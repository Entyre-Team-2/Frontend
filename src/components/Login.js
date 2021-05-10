import { React, useState } from "react";

function Login() {
	const styles = {
		rootContainer: {
			display: "flex",
			flexDirection: "column",
			flexWrap: "nowrap",
			alignItems: "center",
		},
		heading: {
			fontSize: "3.5em",
			fontWeight: 400,
		},
		avatar: {
			width: "10vw",
			height: "10vw",
			borderRadius: "100%",
			backgroundColor: "#5C5656",
			marginBottom: "3em",
		},
		inputFieldContainer: {
			display: "inline-flex",
			flexDirection: "column",
			alignItems: "center",
			alignContent: "space-between",
			marginBottom: "1em",
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
			marginBottom: "2em",
			width: "20em",
		},
		link: {
			color: "inherit",
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
		},
	};

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onChangeEmail = (event) => {
		setEmail(event.target.value);
	};

	const onChangePassword = (event) => {
		setPassword(event.target.value);
	};

    const triggerSignIn = () => {
        console.log(email, password);
		window.location.href = "/dashboard";
    }

	return (
		<div style={styles.rootContainer}>
			<div>
				<h2 style={styles.heading}>Welcome to Entyre</h2>
			</div>
			<div>
				<div style={styles.avatar}></div>
			</div>
			<div style={styles.inputFieldContainer}>
				<input
					type="text"
					name="email"
					id="emailField"
					placeholder="Email"
					style={styles.input}
					value={email}
					onChange={onChangeEmail}
				/>
				<input
					type="password"
					name="password"
					id="passwordField"
					placeholder="Password"
					style={styles.input}
					value={password}
					onChange={onChangePassword}
				/>
			</div>
			<div style={styles.buttonContainer}>
				<button style={styles.button} onClick={triggerSignIn}>Sign In</button>
			</div>
			<div>
				<p>
					New to Entyre?{" "}
					<a href="/signUp" style={styles.link}>
						Register here.
					</a>
				</p>
			</div>
		</div>
	);
}

export default Login;
