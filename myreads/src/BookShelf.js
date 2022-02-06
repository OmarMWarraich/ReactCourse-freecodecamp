import React from 'react';

class BookShelf extends React.Component {
    state = {};

    render() {
        /* display the book in the right shelf*/
        return (
            <div className="sm:{pt-0 pl-3.75 pr-3.75 pb-5} pt-0 pl-7.5 pr-7.5 pb-10">
                <h2 className="border-solid border-b-white">
                    {this.props.shelfTitle}
                </h2>
                <div className="snap-center">
                   <ol className="p-0 m-0 flex flex-wrap justify-center list-none">
                       {this.props.books.filter((book) => (book.imageLinks).map(book =>
                        <li key={book.id} className="w-140">
                            <div className="relative h-200 flex items-end">
                                <div className="boxdshadow bg-white"
                                style={{
                                    width: 128,
                                    height: 193,
                                    backgroundImage: "url(" + book.imageLinks.thumbnail + ")"
                                  }}
                                />
                                <div className="absolute right-0 -bottom-2.5 w-10 h-10 rounded-full bg-blue-400
                                                bg-[url('./icons/arrow-drop-down.svg')] bg-no-repeat bg-center boxshadowd">
                                {/*On change pass the book id and event*/}
                                    <select className="max-w-full max-h-full opacity-0 cursor-pointer">
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                            </div>
                            {/*Display the book title and author*/}
                            <div className="mt-2.5 text-white">
                                {book.title}
                            </div>
                            <div className="text-red-500">
                                  {book.authors &&
                                <div className="text-red-500">
                                    {book.authors[0]}
                                </div>}
                            </div>
                        </li>
                        ))}
                    </ol> 
                </div>
            </div>

        );
    }
}
export default BookShelf;