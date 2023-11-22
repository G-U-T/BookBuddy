const validate = (email, password, setError) => {
	const MIN_LENGTH = 5;

	if (email === `` || password === ``) {
		setError(`Email and password both cannot be empty.`);
		return false;
	};
	if (email.length < MIN_LENGTH || password.length < MIN_LENGTH) {
		setError(`Email and password both must be at least ${MIN_LENGTH} characters long.`);
		return false;
	};

	return true;
};

export default validate;