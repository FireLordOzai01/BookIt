import React, { Component } from 'react';
import MoreBooks from './MoreBooks';
import AddUpdateBook from './../addUpdateBook/AddUpdateBook';
import books from './../../imgs/books.jpg'
import SignUp from './../home/SignUp';

class MoreBooksList extends Component {
    state = { 

     }
    render() { 
        return ( 
            <div id="moreBooks-container">
                <div className="container">
                {this.props.goodLogin === false &&
                        <SignUp />
                    }
                    {this.props.goodLogin === true && 
                            <AddUpdateBook 
                                books={this.props.books}
                                changePath={this.props.changePath}
                                selectedBook={this.props.selectedBook}
                                addBook={this.props.addBook}
                                adminLogOut={this.props.adminLogOut}
                                updatingBook={this.props.updatingBook}
                                updatingBookIndex={this.props.updatingBookIndex}
                                addUpdatedBook={this.props.addUpdatedBook}  />
                    }
                </div>
                
                <div id="image-container" align="center">
                    <div id="MoreBooks-image" className="homeImage-Innercontainer">
                        <img src={books} alt=""/>
                    </div>
                </div>
                
                <div className="container moreBooksList-container">
                    <h1 className="moreBooksList-header">More Books</h1>
                    <div className="filter-container">
                        {/* <form> 
                            <div id="filter-dropdown" className="form-group">
                                <label>Filter</label>
                                <select className="form-control-sm" id="formControlSelect">
                                    <option>Title</option>
                                    <option>Author</option>
                                    <option>Genre</option>
                                    <option>Top Rated</option>
                                </select>
                            </div>
                        </form>    */}
                    </div>
                    <div className="booksList-container">
                        {this.props.books.map((book, index) => {
                            return(
                                <MoreBooks key={book + index} 
                                        books={book}
                                        featuredBooks={this.props.featuredBooks} 
                                        index={index}
                                        changePath={this.props.changePath}
                                        setBook={this.props.setBook}
                                        selectedBook={this.props.selectedBook}
                                        removeFeatured={this.props.removeFeatured}
                                        goodLogin={this.props.goodLogin}
                                        adminLogOut={this.props.adminLogOut}
                                        featuredFilter={this.props.featuredFilter}
                                        addFeatured={this.props.addFeatured} 
                                        updateBook={this.props.updateBook} 
                                        />
                            )
                        })}
                    </div>
                </div>
            </div>
         );
    }
}
 
export default MoreBooksList;