import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar';
import BookList from './components/BookList'
import Book from './components/Book';
import Login from './components/Login';
import Register from './components/Register';
import AccountPage from './components/AccountPage';

import './App.css'
import './custom-style.css'


function App() {
	const [selectedBook, setSelectedBook] = useState(null);
	const [token, setToken] = useState(null);

	return (
	<>
		<NavBar token={token}></NavBar>
		<Routes>
			<Route path='/' element={
				<></>
			} />
			<Route path='/books' element={
				<BookList setSelectedBook={setSelectedBook} token={token}></BookList>
			} />
			<Route path='/books/:id' element={
				<Book book={selectedBook} setSelectedBook={setSelectedBook} token={token} isSelected={true}></Book>
			} />
			<Route path='/login' element={
				<Login setToken={setToken}></Login>
			} />
			<Route path='/register' element={
				<Register setToken={setToken}></Register>
			} />
			<Route path='/account' element={
				<AccountPage token={token}></AccountPage>
			} />
		</Routes>
	</>
	)
}

export default App
