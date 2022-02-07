import React from 'react';

/** @description: BookShelf Component */

class BookShelf extends React.Component {
    state = {};

    render() {
        /* display the book in the right shelf*/
        return (
            <div className="pt-3 px-5 pb-20">
                <h2 className="text-white text-2xl font-semibold mb-5">
                    {this.props.shelfTitle}
                    <span><hr></hr></span>
                </h2>
                
                
                <div className="content-center">
                   <ol className="p-0 m-0 flex flex-wrap justify-center list-none">
                       {this.props.books.filter((book) => (book.imageLinks)).map(book =>
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
                                                bg-[url('./icons/arrow-drop-down.svg')] bg-no-repeat bg-center shadow-lg">
                                {/*On change pass the book id and event*/}
                                    <select 
                                        className="max-w-full max-h-full opacity-0 cursor-pointer"
                                        value={book.shelf}
                                        onChange={event => this.props.updateShelf(book.id, event)}
                                        >
                                        <option value="none" disabled>
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

        );
    }
}
export default BookShelf;