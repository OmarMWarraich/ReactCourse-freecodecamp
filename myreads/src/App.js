import React from 'react';
import { Route } from "react-router-dom";
import BookList from "./BookList";
import * as BooksAPI from "./BooksAPI";

class App extends React.Component {
  state = {
    books: [] // To track books
  };

  //Call BooksAPI.js to retrieve all books
  componentDidMount() {
    this.updateData()
  }

  //To handle shelf change
  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(response => {
      this.updateData()
    })
  }

  //To update the book in the state
  updateData = () => {
    BooksAPI.getAll().then(data => {
      this.setState({
        books: data
      })
    });
  }

 

render() {
  return (
    <div className="bg-lime-900">
      {/*For current app*/}
      <Route exact path="/" render={() => <BookList currentBooks={this.state.books} />} />
    </div>
  );
}
}
export default App;
