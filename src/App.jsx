import { useState } from 'react'
import BookList from './components/BookList'
import Book from './components/Book';
import './App.css'
import './custom-style.css'

function App() {
	const [selectedBook, setSelectedBook] = useState(null);

	return (
	<>
	{
		selectedBook ? (
			<Book book={selectedBook} setSelectedBook={setSelectedBook} isSelected={true}></Book>
		) : (
			<BookList setSelectedBook={setSelectedBook}></BookList>
		)
	}
	</>
	)
}

export default App
