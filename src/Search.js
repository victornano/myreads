import React, { Component } from 'react';
import PropTypes from 'prop-types'
import BookList from './BookList'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class Search extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        bookShelves: PropTypes.array.isRequired,
        onBookTag: PropTypes.func.isRequired
    }
    state = {
        searcResults: []
    }
    updateQuery = (query) => {
        if (query.length > 0) {
            BooksAPI.search(query).then((searcResults) => {
                // Update results shelf based on the books prop (Books API getAll)
                if(this.props.books.length > 0 && searcResults){
                    this.props.books.forEach(function(book) {
                        const matchingResult = searcResults.find((result) => result.id === book.id)
                        if (matchingResult) {
                            matchingResult.shelf = book.shelf
                        }
                    })
                }
                this.setState({ searcResults })
            })
        }
        else{
            this.setState({ searcResults: [] })
        }

    }
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                <Link to="/" className="close-search" >Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" onChange={(event) => this.updateQuery(event.target.value)} />
                </div>
                </div>
                <div className="search-books-results">
                    <BookList books={this.state.searcResults}  onBookTag={this.props.onBookTag} bookShelves={this.props.bookShelves} />
                </div>
            </div>
        )
    }
}

export default Search;