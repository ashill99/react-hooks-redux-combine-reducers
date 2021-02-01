import {combineReducers } from 'redux'
import authorsReducer from './features/authors/authorsSlice'
import BooksReducer from './features/books/bookSlice'

const rootReducer = combineReducers({
    authors: authorsReducer,
    books: booksReducer,
})

export default rootReducer 