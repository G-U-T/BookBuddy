import {React, useState} from "react";
import validate from "../account-checker";

const API_URL = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com`;
const REGISTRATION_URL = `/api/users/register`;

const Register = ({setToken}) => {
	const [email, setEmail] = useState(``);
	const [password, setPassword] = useState(``);

	const [error, setError] = useState(null);
	const [successMessage, setSuccessMessage] = useState(null);

	const submitRegistration = async (event) => {
		event.preventDefault();

		try {
			if (!validate(email, password, setError)) return;

			const response = await fetch(`${API_URL}${REGISTRATION_URL}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					firstname: `Johnny`,
					lastname: `Appleseed`,
					email: `${email}`,
					password: `${password}`,
				}),
			});
			const result = await response.json();
			setToken(result.token);
			setSuccessMessage(result.message);
			setError(null);
		}
		catch (error) {
			setError(error);
		}
	}

	return (
	<section>
		<h2>Want to make a new account?</h2>

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
			<button onClick={(event) => {submitRegistration(event)}}>Register</button>
		</form>

		{successMessage && <p className="good">{successMessage}</p>}
		{error && <p className="bad">{error}</p>}
	</section>
	);
};

export default Register;