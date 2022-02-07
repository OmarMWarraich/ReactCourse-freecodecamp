import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookList from "./BookList";
import * as BooksAPI from "./BooksAPI";
import BookSearch from "./BookSearch";


/** @description Main App component. */

class App extends React.Component {
  state = {
    books: [] // To track books
  };

/**
 *  @Lifecycle event handler called just after the app loads into the DOM.
 *  Call the API to get all the books.
 */  
  
  componentDidMount() {
    this.updateData()
  }

  /** Update to handle shelf change*/

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(response => {
      this.updateData()
    })
  }

  /** Update the book in the state*/
  
  updateData = () => {
    BooksAPI.getAll().then(data => {
      this.setState({
        books: data
      })
    });
  }

 

render() {
  return (
    <div className="bg-lime-900 pb-0">
      <Router>
        <Routes>
          {/*For current app*/}
          <Route exact path="/" element={<BookList currentBooks={this.state.books} />} />
          <Route exact path="/search" element={<BookSearch updateShelf={this.updateShelf} currentBooks={this.state.books} />} />
        </Routes>
      </Router>
    </div>
  );
}
}
export default App;
