import React from 'react'

function Login() {
    
    const styles = {
        rootContainer: {
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            alignItems: "center"
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
            marginBottom: "3em"
        },
        inputFieldContainer: {
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "center",
            alignContent: "space-between",
            marginBottom: "2em"
        },
        input: {
            marginBottom: "0.5em",
            width: "15em",
            height: "0.5em",
            backgroundColor: "#5C5656",
            color: "white",
            outline: "none",
            border: "none",
            padding: "1em",
            fontSize: "1em"
        },
        link: {
            color: "inherit"
        }
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
                <input type="text" name="username" id="usernameField" placeholder="Username" style={styles.input}/>
                <input type="password" name="password" id="passwordField" placeholder="Password" style={styles.input}/>
            </div>
            <div>
                <p>New to Entyre? <a href="#" style={styles.link}>Register here.</a></p>
            </div>
        </div>
    )
}

export default Login
