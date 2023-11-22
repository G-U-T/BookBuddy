import {React, useState} from "react";
import validate from "../account-checker";

const API_URL = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com`;
const LOGIN_URL = `/api/users/login`;
const SUCCESSFUL_LOGIN_MESSAGE = `Login successful!`;

const Login = ({setToken}) => {
	const [email, setEmail] = useState(``);
	const [password, setPassword] = useState(``);

	const [error, setError] = useState(null);
	const [successMessage, setSuccessMessage] = useState(null);

	const submitLogin = async (event) => {
		event.preventDefault();

		try {
			if (!validate(email, password, setError)) return;

			const response = await fetch(`${API_URL}${LOGIN_URL}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email,
					password,
				}),
			});
			const result = await response.json();
			if (result.message === SUCCESSFUL_LOGIN_MESSAGE) {
				setSuccessMessage(result.message);
				setError(null);
				setToken(result.token);
			}
			else {
				setError(result.message);
				setSuccessMessage(null);
			}
		}
		catch(err) {
			setError(err.message);
		}
	};

	return (<>
		<h2>Have an existing account?</h2>

		<form className="vertical-flex">
			<label>
				Email: <input required type="text" value={email} onChange={(event) => {
					setEmail(event.target.value);
				}}/>
			</label>
			<label>
				Password: <input required type="text" value={password} onChange={(event) => {
					setPassword(event.target.value);
				}}/>
			</label>
			<button onClick={(event) => {submitLogin(event)}}>Log in</button>
		</form>

		{successMessage === SUCCESSFUL_LOGIN_MESSAGE && <p className="good">{successMessage}</p>}
		{error && <p className="bad">{error}</p>}
	</>);
};

export default Login;