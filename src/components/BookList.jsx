import {React, useState, useEffect} from "react";
import Book from "./Book";

const API_URL = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com`;
const GET_URL = `/api/books`;

const BookList = ({setSelectedBook, token}) => {

	const [books, setBooks] = useState(null);

	useEffect(() => {
		const fetchBooks = async () => {
			try {
				const response = await fetch(`${API_URL}${GET_URL}`, {
					headers: {
						'Content-Type': 'application/json',
					},
				});
				const result = await response.json();
				setBooks(result.books);
			}
			catch(error) {
				console.log(`Error: ${error}`);
			}
		};
	
		fetchBooks();
	}, []);
	
	return (<div>
		{
			books ? (				
				books.map((book) => {
					return <Book 
					book={book} setSelectedBook={setSelectedBook}
					key={book.title} token={token}
					></Book>;
				})
			) : (
				<></>
			)
		}
	</div>);
};

export default BookList;