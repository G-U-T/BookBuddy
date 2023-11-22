import { useState } from 'react'
import BookList from './components/BookList'
import Book from './components/Book';
import './App.css'

function App() {
	const [selectedBook, setSelectedBook] = useState(null);

	return (
	<>
	{
		selectedBook ? (
			<Book book={selectedBook}></Book>
		) : (
			<BookList></BookList>
		)
	}
	</>
	)
}

export default App
