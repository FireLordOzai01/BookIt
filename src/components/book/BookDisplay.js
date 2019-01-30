import React, { Component } from 'react';
import Book from './Book';

class BookDisplay extends Component {
    state = { 

     }
    render() { 
        return ( 
            <div>
                <Book 
                    selectedBook={this.props.selectedBook}
                    increaseShoppingCart={this.props.increaseShoppingCart}
                />
            </div>
         );
    }
}
 
export default BookDisplay;