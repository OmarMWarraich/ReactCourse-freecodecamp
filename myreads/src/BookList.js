import React from 'react';
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import BookShelf from "./BookShelf";

class BookList extends React.Component {
    state = {};

    //To filter the books depending on a shelf
    updateShelf = (bookId, event) => {
        //get the book on shelf from app
        let currentBooks = this.props.currentBooks;
        const book = currentBooks.filter(book => book.id === bookId)[0];
        book.shelf = event.target.value;
        BooksAPI.update(book, event.target.value).then(response => {
            this.setState({
                books: currentBooks
            });
        });
    };

    render() {
        return (
            <div>
            <div className="py-2.5 px-7.5 bg-blue-400 text-center">
                <h1 className="font-normal text-white m-0">MyReads</h1>
            </div>
            
            <div className="pt-0 px-0 pb-20 flex-1">
            {/*Display the three different shelves in main pages with its current books */}
            <BookShelf
                key="currently"
                books={this.props.currentBooks.filter(book => book.shelf === "currentlyReading")}  
                updateShelf={this.updateShelf}
                shelfTitle="Currently Reading"
            />
            <BookShelf
                key="wantToRead"
                books={this.props.currentBooks.filter(book => book.shelf === "wantToRead")}  
                updateShelf={this.updateShelf}
                shelfTitle="Want to Read"
            />
            <BookShelf
                key="read"
                books={this.props.currentBooks.filter(book => book.shelf === "read")}  
                updateShelf={this.updateShelf}
                shelfTitle="Read"
            />
            </div>
            <div className="fixed right-6.25 bottom-6.25">
                <Link to="/search">Add a book</Link>
            </div>
            </div>
        );
    }
}
export default BookList;