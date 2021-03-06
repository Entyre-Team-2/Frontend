import { React, useState, Fragment } from "react";

function PatientDetails(props) {
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
		legend: {
			display: "inline-flex",
			flexDirection: "row",
			justifyContent: "space-between",
			width: "50%",
		},
		image: {
			height: "7em",
			width: "auto",
		},
		caption: {
			textAlign: "center",
			marginTop: "0.5em",
		},
		body: {
			width: "50%",
			marginTop: "2em",
		},
		interactionRow: {
			background: "rgba(14,13,13,0.5)",
			marginBottom: "1em",
			padding: "0.75em 2em",
			width: "100%",
			borderRadius: "1.5em",
			display: "inline-grid",
			gridTemplateColumns: "1fr 1fr 1fr",
			gridTemplateRows: "1fr",
		},
		inlineImage: {
			height: "1.5em",
			width: "auto",
			justifySelf: "end",
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
			marginTop: "1em",
		},
	};

	const [riskScore, setRiskScore] = useState(60);

	const [interactions, setInteractions] = useState([
		["Paracetamol", "Adderal", 0],
		["Paracetamol", "Rizek", 1],
		["Rizek", "Apixban", 2],
		["Pizza", "Pineapple", 2],
	]);

	const chooseImage = (index) => {
		switch (index) {
			case 0:
				return (
					<img
						src="/check-mark.png"
						alt="No Risk"
						style={styles.inlineImage}
					/>
				);

			case 1:
				return (
					<img
						src="/yellow.png"
						alt="Yellow Sign"
						style={styles.inlineImage}
					/>
				);

			case 2:
				return (
					<img
						src="/orange.png"
						alt="Orange Sign"
						style={styles.inlineImage}
					/>
				);

			case 3:
				return (
					<img
						src="/red.png"
						alt="Red Sign"
						style={styles.inlineImage}
					/>
				);
			default:
				return (
					<img
						src="/red.png"
						alt="Red Sign"
						style={styles.inlineImage}
					/>
				);
		}
	};

	const triggerBack = () => {
		window.location.href = "/dashboard";
	};

	return (
		<Fragment>
			<nav>
				<button style={styles.backButton} onClick={triggerBack}>
					Back
				</button>
				{console.log(props.data)}
			</nav>
			<div style={styles.rootContainer}>
				<div>
					<h2 style={styles.heading}>
						Risk Score: {props.data.riskScore}
					</h2>
				</div>
				<div style={styles.legend}>
					<figure>
						<img
							src="/red.png"
							alt="Red Sign"
							style={styles.image}
						/>
						<figcaption style={styles.caption}>
							High Risk
						</figcaption>
					</figure>
					<figure>
						<img
							src="/orange.png"
							alt="Orange Sign"
							style={styles.image}
						/>
						<figcaption style={styles.caption}>
							Medium Risk
						</figcaption>
					</figure>
					<figure>
						<img
							src="/yellow.png"
							alt="Yellow Sign"
							style={styles.image}
						/>
						<figcaption style={styles.caption}>Low Risk</figcaption>
					</figure>
					<figure>
						<img
							src="/check-mark.png"
							alt="Ok Sign"
							style={styles.image}
						/>
						<figcaption style={styles.caption}>No Risk</figcaption>
					</figure>
				</div>
				<div style={styles.body}>
					{props.data.interactions.map((interaction, index) => {
						return (
							<div key={index} style={styles.interactionRow}>
								<span>{interaction.drug1}</span>
								<span>{interaction.drug2}</span>

								{chooseImage(interaction.riskLevel)}
							</div>
						);
					})}
				</div>
			</div>
		</Fragment>
	);
}

export default PatientDetails;
