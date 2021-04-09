import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {

    const styles = {
        link: {
            textDecoration: "inherit",
            color: "inherit"
        }
    }

	return (
		<div id="root-container">
			<div id="heading-container">
				<h2>
					Welcome!
					<br />
					Who are you?
				</h2>
			</div>
			<div id="buttons-container">
				<button className="landing-page-button">
					<Link to="/signUpDoctor" style={styles.link}>Doctor</Link>
				</button>
				<button className="landing-page-button">
					<Link to="/signUpPharmacist" style={styles.link}>Pharmacist</Link>
				</button>
			</div>
		</div>
	);
}

export default LandingPage;
