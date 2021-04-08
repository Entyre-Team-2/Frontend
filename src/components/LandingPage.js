import React from 'react'

function LandingPage() {
    return (
        <div id="root-container">
            <div id="heading-container">
                <h2>Welcome!<br/>Who are you?</h2>
            </div>
            <div id="buttons-container">
                <button className="landing-page-button">Doctor</button>
                <button className="landing-page-button">Pharmacist</button>
            </div>
        </div>
    )
}

export default LandingPage
