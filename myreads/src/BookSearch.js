import React from 'react';
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";


class BookSearch extends React.Component {

    constructor() {
        super();
        this.state = {
            query: "",
            books: []
        }
    }

    /*
            Update the shelf for each book,
            none if the book is not on any,
            and if id found on book shelf ,
            then set the current book shelf. 
    */

    updateData = (books) => {
        const cBooks = books.map(book => {
            //Locate the book
            book.shelf = "none";
            this.props.currentBooks.forEach(book2 => {
                if (book.id === book2.id) {
                    book.shelf = book2.shelf;
                }
            })
            return book
            })
            this.setState({
                books: cBooks
            })    
        }

    /*
            Read the query when user types
            the search term.
    */
    
     updateQuery = (query) => {
         this.setState({ query: query })
         if (query) {
             BooksAPI.search(query, 20).then((books) => {
                 books.length > 0 ? this.updateData(books) : this.setState({books:[]})
             }).catch((e)=> {
                 console.log(`The API responded with an error: ${e}`)
             })
         }
         else
         {this.setState({books:[]})}
     }   
    
    /*
            Update the shelf when shelf
            changer button is clicked &
            shelf is changed.
    */

    updateBooks = (book, shelf) => {
        let current = this.state.books;
        const bookToUpdate = current.filter(cBook => cBook.id === book.id)[0];
        bookToUpdate.shelf = shelf;
        this.setState({
            books: current
        })
        this.props.updateShelf(book, shelf);
    }

    render(){
        return (
            <div className="search-books">
                <div className="fixed w-full text-2xl top-0 left-0 z-5 flex shadow-lg ">
                    <Link to="/" className="block w-10 bg-blue-400 bg-[url('./icons/arrow-back.svg')]  bg-auto bg-no-repeat">
                        <span className="opacity-0">Close</span>
                        
                    </Link>
                    <div className="flex-1 bg-blue-400">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={event => this.updateQuery(event.target.value)}
                            className="w-full py-15 px-10 outline-none"
                        />
                    </div>
                </div>
                <div className="pt-20 px-5 pb-5">

                <ol className="p-0 m-0 flex flex-wrap justify-center list-none">
                       {this.state.books.filter((book) => (book.imageLinks)).map(book =>
                        <li key={book.id} className="w-40 py-5 px-7.5 text-left">
                            <div className="relative h-200 flex items-end">
                                <div className="shadow-lg bg-white"
                                style={{
                                    width: 128,
                                    height: 193,
                                    backgroundImage: "url(" + book.imageLinks.thumbnail + ")"
                                  }}
                                />
                                <div className="absolute right-8 bottom-0 w-8 h-8 rounded-full bg-blue-400
                                                bg-[url('./icons/arrow-drop-down.svg')] bg-no-repeat bg-center boxshadowd">
                                {/*On change pass the book id and event*/}
                                    <select 
                                        className="max-w-full max-h-full opacity-0 cursor-pointer"
                                        value={book.shelf}
                                        onChange={e => {
                                            this.updateBooks(book, e.target.value);
                                        }}
                                        >
                                        <option disabled>
                                            Move to...
                                            </option>    
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                            </div>
                            {/*Display the book title and author*/}
                            <div className="mt-2.5 text-white text-sm pt-2 pl-0 pr-1">
                                {book.title}
                            </div>
                            <div className="text-red-500 pr-5">
                                  {book.authors &&
                                <div>
                                    {book.authors[0]}
                                </div>}
                            </div>
                        </li>
                        )}
                    </ol>                     

                </div>
            </div>   
        )
    }
}

export default BookSearch;
