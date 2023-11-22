import React from "react";

const Book = ({book, setSelectedBook, isSelected}) => {
	return (
		<section className="book vertical-flex">
			<button onClick={() => {
				if (isSelected) {
					setSelectedBook(null);
				}
				else {
					setSelectedBook(book);
				}
			}}>View book</button>
			<h3>{book.title}</h3>
			{
				isSelected ? (<>
					<p>Author: {book.author}</p>
					<p className="small-text">Description: {book.description}</p>
				</>) : (
					<></>
				)
			}
		</section>
	);
};

export default Book;