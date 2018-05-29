import React, { Component } from 'react';
import PropTypes from 'prop-types'
import styles from './Booklist.scss'

class BookList extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        bookShelves: PropTypes.array.isRequired,
        onBookTag: PropTypes.func.isRequired
    }
    state = {}
    render() {
        return (
            this.props.books.length > 0 && (
                <ol className={styles.grid}>
                    {this.props.books.map((book) => (
                        <li key={book.id} >
                            <div className={styles.book}>
                                <div className={styles.bookTop}>
                                    {book.imageLinks && book.imageLinks.thumbnail && (
                                        <div className={styles.bookCover} style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                                    )}
                                    <div className={styles.bookShelfChanger}>
                                        <select value={book.shelf || 'none'} onChange={(e) => { this.props.onBookTag(book, e.target.value) }} >
                                            <option key="move" value="none" disabled>Move to...</option>
                                            {this.props.bookShelves.map((bookshelf) => (
                                                <option key={bookshelf.id} value={bookshelf.id}>{bookshelf.title}</option>
                                            ))}
                                            <option key="none" value="none">None</option>
                                        </select>
                                    </div>
                                </div>
                                <div className={styles.bookTitle}>{book.title}</div>
                                <div className={styles.bookAuthors}>{book.authors && (book.authors.join(', '))}</div>
                            </div>
                        </li>
                    ))}
                </ol>
            )
        );
    }
}

export default BookList;