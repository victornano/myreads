import React, { Component } from 'react';
import PropTypes from 'prop-types'

class BookList extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        bookShelves: PropTypes.array.isRequired,
        onBookTag: PropTypes.func.isRequired
    }
    state = {  }
    render() {
        return (
            this.props.books.length > 0 && (
                <ol className="books-grid">
                    { this.props.books.map((book) => (
                        <li key={book.id} >
                            <div className="book">
                            <div className="book-top">
                                {book.imageLinks && book.imageLinks.thumbnail && (
                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                                )}
                                <div className="book-shelf-changer">
                                <select value={book.shelf || 'none'} onChange={(e) => {this.props.onBookTag(book, e.target.value)}} >
                                    <option key="move" value="none" disabled>Move to...</option>
                                    {this.props.bookShelves.map((bookshelf) => (
                                        <option key={bookshelf.id} value={bookshelf.id}>{bookshelf.title}</option>
                                    ))}
                                    <option key="none" value="none">None</option>
                                </select>
                                </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors && (book.authors.join(', '))}</div>
                            </div>
                        </li>
                    ))}
                </ol>
            )
        );
    }
}

export default BookList;