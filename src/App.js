import React, { Component } from 'react';
import './App.css';
import Home from './components/home/Home';
import BooksData from './data/index';
import MoreBooksList from './components/moreBooks/MoreBooksList';
import BookDisplay from './components/book/BookDisplay';
import NavBar from './components/navbar/NavBar';
import {HOME, BOOKDISPLAY, MOREBOOKS, ADMINLOGIN} from './components/constants/constants';
import AdminLogin from './components/admin/AdminLogin';


class App extends Component {
  state = {
    path: HOME,
    books: BooksData,
    featuredBooks: [],
    selectedBook: {},
    user:{
      userName: 'admin',
      password: 'admin'
    },
    goodLogin: false,
    shoppingCart: 0,
    updatingBook: null,
    updatingBookIndex: null,
    guestLogin: {
      name: 'James Howlett',
      email: 'jameshowlett03@hotmail.com',
      password: 'wolverine'
    },
    goodGuestLogin: false,
    guestSignUp: {},
    goodGuestSignUp: false
  }

changePath = x => {
  this.setState({ path: x})
}

renderPath = path => {
  switch(path) {
    case HOME:
      return(
        <Home 
          changePath={this.changePath} 
          books={this.state.books}
          featuredBooks={this.state.featuredBooks}
          selectedBook={this.selectedBook}
          goodLogin={this.state.goodLogin}
          goodGuestLogin={this.state.goodGuestLogin}
          goodGuestSignUp={this.state.goodGuestSignUp}
          adminLogOut={this.adminLogOut}
          guestLogOut={this.guestLogOut}
          addBook={this.addBook}
          shoppingCart={this.state.shoppingCart}
          removeFeatured={this.removeFeatured}
          featuredFilter={this.featuredFilter}
          updateBook={this.updateBook}
          updatingBook={this.state.updatingBook}
          updatingBookIndex={this.state.updatingBookIndex}
          addUpdatedBook={this.addUpdatedBook} 
          guestLogin={this.guestLogin} 
          guestSignUp={this.guestSignUp}
          guestName={this.state.guestSignUp}
          guestLoginName={this.state.guestLogin} 
        />
      )
    case BOOKDISPLAY:
        return(
          <BookDisplay 
            changePath={this.changePath} 
            books={this.state.books}
            selectedBook={this.state.selectedBook}
            shoppingCart={this.state.shoppingCart}
            increaseShoppingCart={this.increaseShoppingCart}
          />
        )
    case MOREBOOKS:
        return(
          <MoreBooksList 
            changePath={this.changePath} 
            books={this.state.books}
            featuredBooks={this.state.featuredBooks} 
            selectedBook={this.selectedBook}
            goodLogin={this.state.goodLogin}
            adminLogOut={this.adminLogOut}
            addBook={this.addBook}
            shoppingCart={this.state.shoppingCart}
            removeFeatured={this.removeFeatured}
            featuredFilter={this.featuredFilter}
            addFeatured={this.addFeatured} 
            updateBook={this.updateBook}  
            updatingBook={this.state.updatingBook}
            updatingBookIndex={this.state.updatingBookIndex}
            addUpdatedBook={this.addUpdatedBook}         
          />
        )
    case ADMINLOGIN:
          return(
            <AdminLogin 
              changePath={this.changePath}
              adminLogin={this.adminLogin}
            />
          )
    default:
            return <h5>Page not found...</h5>
  }
}

adminLogin = (user) => {
  if (user.userName === this.state.user.userName &&
      user.password === this.state.user.password) {
        this.setState({
          goodLogin: true
        });
        this.changePath(HOME);
      } else {
        this.setState({
          goodLogin: false
        });
        console.log('badLogin');
      }
} 

adminLogOut = () => {
  this.setState({
    goodLogin: false
  });
}

guestLogin = (user) => {
  if (user.email === this.state.guestLogin.email && 
      user.password === this.state.guestLogin.password) {
        this.setState({
          goodGuestLogin: true
        });
      } else {
        this.setState({
          goodGuestLogin: false
        });
      }
}

guestLogOut = () => {
  this.setState({
    goodGuestSignUp: false
  });
}

guestSignUp = (user) => {
  this.setState({
    guestSignUp: user,
    goodGuestSignUp: true
  })
}

//filters out all books where isFeatured is set to true
featuredFilter = arr => {
  let newArr =  arr.filter(book => book.isFeatured);
   this.setState({
      featuredBooks: newArr
   });
}

addFeatured = index => {
  console.log(index)
  let newBooks = [...this.state.books];
  newBooks[index].isFeatured = true;
  let newFeaturedBooks = [...this.state.featuredBooks, newBooks[index]]

  this.setState({
    books: newBooks,
    featuredBooks: newFeaturedBooks
  });
}

removeFeatured = (index) => {
  let newBooks = [...this.state.featuredBooks];
  newBooks[index].isFeatured = false;
  newBooks.splice(index, 1);

  this.setState({
    featuredBooks: newBooks
  });
}

componentDidMount(){
  this.featuredFilter(this.state.books);
}

selectedBook = book => {
  this.setState({
    selectedBook: book
  })
}

addBook = (book, event) => {
  event.preventDefault();
  let newBooks = [...this.state.books, book];
  let newFeaturedBooks = [...this.state.featuredBooks, book];
  if(book.isFeatured){
    this.setState({
      books: newBooks,
      featuredBooks: newFeaturedBooks
    })
  } else
  this.setState({
    books: newBooks
  })
}
// if updating book is no longer null in state, will trigger componentWillReceiveProps in AddUpdateBook component
updateBook = (book, index) => {
  this.setState({
    updatingBook: book,
    updatingBookIndex: index
  })
}

//adds or updates book in state for  books and featuredBooks sets updatingBook & updatingBookIndex back to null
addUpdatedBook = (book, index, event) => {
  event.preventDefault();
  
  let newBooks = [...this.state.books];
  let newFeaturedBook = [...this.state.featuredBooks];
  let featuredBookIndex = newFeaturedBook.findIndex(book => book.bookTitle === newBooks[index].bookTitle);
  let booksIndex = newBooks.findIndex(book => book.bookTitle === newFeaturedBook[index].bookTitle);

  if(this.state.updatingBook.isFeatured && this.state.path === "MOREBOOKS") {
    newBooks.splice(index, 1, book);
    newFeaturedBook.splice(featuredBookIndex, 1, book);
    this.setState({
      books: newBooks,
      featuredBooks: newFeaturedBook
    })  
  } else if (!this.state.updatingBook.isFeatured){
    newBooks.splice(index, 1, book);
    this.setState({
      books: newBooks,
    })
  } else if (this.state.updatingBook.isFeatured && this.state.path === "HOME"){
    newBooks.splice(booksIndex, 1, book);
    newFeaturedBook.splice(index, 1, book);
    this.setState({
      books: newBooks,
      featuredBooks: newFeaturedBook
    }) 
  }

  this.setState({
    updatingBook: null,
    updatingBookIndex: null
  })
}



increaseShoppingCart = () => {
  this.setState({
    shoppingCart: this.state.shoppingCart + 1
  })
}



  render() {
    return (
      <div>
        <div>
          <NavBar 
            changePath={this.changePath}
            guestLogOut={this.guestLogOut}
            goodGuestLogin={this.state.goodGuestLogin}
            goodGuestSignUp={this.state.goodGuestSignUp}/>
        </div>
        <div>
          {/* {this.featuredFilter(this.state.books)} */}
          {this.renderPath(this.state.path)}
        </div> 
      </div>
    );
  }
}

export default App;
