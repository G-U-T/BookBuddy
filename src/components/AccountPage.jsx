import {React, useState, useEffect} from "react";

const API_URL = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com`;
const ME_URL = `/api/users/me`;

const AccountPage = ({token}) => {
	const [account, setAccount] = useState(null);
	const [reservations, setReservations] = useState(null);

	useEffect(() => {
		const fetchAccount = async () => {
			try {
				const response = await fetch(`${API_URL}${ME_URL}`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"Authorization": `Bearer ${token}`,
					},
				});
				const result = await response.json();
				setAccount(result);
			}
			catch (error) {
				console.log(error);
			}
		};

		// const fetchReservations = async () => {
		// 	try {
		// 		const response = await fetch(`${API_URL}${ME_URL}`, {
		// 			method: "GET",
		// 			headers: {
		// 				"Content-Type": "application/json",
		// 				"Authorization": `Bearer ${token}`,
		// 			},
		// 		});
		// 		const result = await response.json();
		// 		setReservations(result);
		// 	}
		// 	catch (error) {
		// 		console.log(error);
		// 	}
		// };

		fetchAccount();
		// fetchReservations();
	}, []);
	
	return (
		account ? (<div className="vertical-flex">
			<h3>Hello, {account.email}!</h3>
			<p>Books you've checked out:</p>
			<ul>
				{
					account.books.map((book) => {
						return (<li>{book.title} 
							<button>Return book</button>
						</li>);
					})
				}
			</ul>
		</div>) : (
			<p></p>
		)
	);
};

export default AccountPage;