import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookList from '../BookList/BookList.jsx'
import { Link } from 'react-router-dom'
import styles from './Bookshelves.scss'

class BookShelves extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        bookShelves: PropTypes.array.isRequired,
        onBookTag: PropTypes.func.isRequired
    }
    state = { }
    render() {
        return (
            <div>
                <div className={styles.title}>
                    <h1>MyReads</h1>
                </div>
                <div className={styles.content}>
                    {this.props.bookShelves.map((bookshelf) => (
                        <div key={bookshelf.id} className={styles.bookshelf}>
                            <h2 className={styles.bookshelfTitle}>{bookshelf.title}</h2>
                            <div className={styles.bookshelfBooks}>
                                <BookList books={this.props.books.filter((book) => book.shelf === bookshelf.id )}  onBookTag={this.props.onBookTag} bookShelves={this.props.bookShelves} />
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.openSearch}>
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default BookShelves;