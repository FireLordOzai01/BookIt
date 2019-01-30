import React, { Component } from 'react';
import FeaturedBook from './FeaturedBook';

class FeaturedBooksList extends Component {
    state = { 
        // bookTitle: '',
        // bookSynopsis: '',
        // bookImg: '',
        // bookRating: '',
        // bookQuantity: "",
        // inStock: true,
        // isFeatured: true
     }

    // featureFilter = (arr) => {
    //     let newArr =  arr.filter(book => book.isFeatured);
    //      this.setState({
    //         books: newArr
    //      });
    //  }
   

    render() { 
        return (  
            <div id="featuredBooks-container">
                <h1 id="featuredBooks-header">Featured Books</h1>
                <div>
                    {/* {this.props.featuredFilter(this.props.books)} */}
                    {this.props.featuredBooks.map((book, index) => {
                        return (
                            <FeaturedBook key={book.bookTitle + index} 
                                          books={book}
                                          index={index}
                                          changePath={this.props.changePath}
                                          setBook={this.props.setBook}
                                          selectedBook={this.props.selectedBook}
                                          shoppingCart={this.props.shoppingCart}
                                          removeFeatured={this.props.removeFeatured}
                                          goodLogin={this.props.goodLogin}
                                          updateBook={this.props.updateBook}
                                          updatingBook={this.props.updatingBook}
                                          updatingBookIndex={this.props.updatingBookIndex} 
                                          />
                        )
                    })}
                </div>
            </div>
         );
    }
}
 
export default FeaturedBooksList;