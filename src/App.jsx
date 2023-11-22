import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import BookList from './components/BookList'
import Book from './components/Book';
import './App.css'
import './custom-style.css'

function App() {
	const [selectedBook, setSelectedBook] = useState(null);

	return (
	<>
		<NavBar></NavBar>
		<Routes>
			<Route path='/' element={
				<BookList setSelectedBook={setSelectedBook}></BookList>
			} />
			<Route path='/books/:id' element={
				<Book book={selectedBook} setSelectedBook={setSelectedBook} isSelected={true}></Book>
			} />
		</Routes>
	</>
	)
}

export default App
