import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from '../../BooksAPI'
import BookShelves from '../BookShelves/BookShelves'
import Search from '../Search/Search'
import styles from './App.scss'

class BooksApp extends React.Component {
    state = {
        books: [],
        bookShelves: [
            {
                id: 'currentlyReading',
                title: 'Currently Reading'
            },
            {
                id: 'wantToRead',
                title: 'Want to Read'
            },
            {
                id: 'read',
                title: 'Read'
            }
        ]
    }
    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({ books })
        })
    }
    bookTag = (updatedBook, shelf) => {
        BooksAPI.update(updatedBook, shelf)
        // Updates the incoming book in case it is a new book to be added
        updatedBook.shelf = shelf
        // Is the book in a shelf
        const existingBook = this.state.books.find((book) => book.id === updatedBook.id)
        // Set the new state
        this.setState((prevState) => ({
            contacts: existingBook ? prevState.books.map((book) => {
                if(book.id === updatedBook.id) {
                    book.shelf = shelf
                }
                return book;
            }) : prevState.books.push(updatedBook)
        }))
    }
    render() {
        return (
            <div className={styles.bg}>
                <Route path="/search" render={() => (
                    <Search books={this.state.books} onBookTag={this.bookTag} bookShelves={this.state.bookShelves} />
                )} />
                <Route exact path="/" render={() => (
                    <BookShelves books={this.state.books} onBookTag={this.bookTag} bookShelves={this.state.bookShelves} />
                )} />
            </div>
        )
    }
}

export default BooksApp
