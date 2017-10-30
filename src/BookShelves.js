import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookList from './BookList'
import { Link } from 'react-router-dom'

class BookShelves extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        bookShelves: PropTypes.array.isRequired,
        onBookTag: PropTypes.func.isRequired
    }
    state = { }
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    {this.props.bookShelves.map((bookshelf) => (
                        <div key={bookshelf.id} className="bookshelf">
                            <h2 className="bookshelf-title">{bookshelf.title}</h2>
                            <div className="bookshelf-books">
                                <BookList books={this.props.books.filter((book) => book.shelf === bookshelf.id )}  onBookTag={this.props.onBookTag} bookShelves={this.props.bookShelves} />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default BookShelves;