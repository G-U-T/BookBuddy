import React from "react";
import { Link } from 'react-router-dom';

const Book = ({book, setSelectedBook, isSelected, token}) => {
	return (
			book ? (
				<section className="book vertical-flex">
					
					{/* The link goes to the book route if it's not selected, otherwise it goes back to the book list. */}
					<Link to={isSelected ? (`/books`) : (`/books/${book.id}`)}>
						<button onClick={() => {
							if (isSelected) {
								setSelectedBook(null);
							}
							else {
								setSelectedBook(book);
							}
						}}>
						{isSelected ? ("Back to book list") : (`View book ${book.id}`)}
						</button>
					</Link>
					
					
					<h3>{book.title}</h3>
					{
						isSelected ? (<>
							<p>Author: {book.author}</p>
							<p className="small-text">Description: {book.description}</p>
							{token && <button>Check out</button>}
						</>) : (
							<></>
						)
					}
				</section>
			) : (
				<></>
			)
	);
};

export default Book;