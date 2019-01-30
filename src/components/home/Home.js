import React, { Component } from 'react';
import SignUp from './SignUp';
import FeaturedBooksList from './FeaturedBooksList';
import AddUpdateBook from './../addUpdateBook/AddUpdateBook';
import Book from './../../imgs/Book.jpg';

class Home extends Component {
    state = { 

     }
    render() { 
        return (
            <div>
                <div id="image-container" align="center">
                    <div id="home-image" className="homeImage-Innercontainer">
                        <img src={Book} alt=""/>
                    </div>
                </div>
                {/* if no user is logged in show signup form */}
                <div className="container"> 
                    {this.props.goodLogin === false && 
                     this.props.goodGuestSignUp === false &&
                        <SignUp 
                        guestLogin={this.props.guestLogin}
                        guestSignUp={this.props.guestSignUp}/>
                    }
                    {/* if user is logged in show welcome sign with users name */}
                    {this.props.goodGuestSignUp === true && 
                        <div className="welcome-container">
                            <h1 id="welcome-text">Welcome to BookIt {this.props.guestName.name}!!</h1>
                        </div>
                        
                    }
                    {/* is admin is logged in show add/update form */}
                    {this.props.goodLogin === true && 
                            <AddUpdateBook 
                                books={this.props.books}
                                changePath={this.props.changePath}
                                selectedBook={this.props.selectedBook}
                                addBook={this.props.addBook}
                                adminLogOut={this.props.adminLogOut}
                                updatingBook={this.props.updatingBook}
                                updatingBookIndex={this.props.updatingBookIndex}
                                addUpdatedBook={this.props.addUpdatedBook}   
                    />     
                    }
                    
                    <FeaturedBooksList 
                        books={this.props.books}
                        filterdBooks={this.props.filterdBooks}
                        changePath={this.props.changePath}
                        selectedBook={this.props.selectedBook}
                        shoppingCart={this.props.shoppingCart}
                        removeFeatured={this.props.removeFeatured}
                        goodLogin={this.props.goodLogin}
                        featuredFilter={this.props.featuredFilter}
                        featuredBooks={this.props.featuredBooks}
                        updateBook={this.props.updateBook}
                        updatingBook={this.props.updatingBook}
                        updatingBookIndex={this.props.updatingBookIndex}
                        addUpdatedBook={this.props.addUpdatedBook}   
                    />
                </div>
            </div> 

         );
    }
}
 
export default Home;