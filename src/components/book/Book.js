import React, { Component } from 'react';

class Book extends Component {


    render() { 
        return ( 
            <div>
            <div className="container singleBook-container">
                <div className="row bookDisplay-imageInfo-container">
                    <div className="col-md-5 bookDisplay-image-container">
                        <img src={this.props.selectedBook.bookImg} alt=""/>
                    </div>
                    <div className="col-md-5 bookDisplay-info-container">
                        <h1>{this.props.selectedBook.bookTitle}</h1>
                        <h2>By: {this.props.selectedBook.bookAuthor}</h2>
                        <h3>{this.props.selectedBook.bookGenre}</h3>
                        <button 
                            className="btn btn-primary"
                            onClick={this.props.increaseShoppingCart}
                            >Add to cart</button>
                    </div>
                    <div className="rating-container">
                    </div>
                </div>
                <div className="synopsis bookDisplay-synopsis-container">
                    <p>{this.props.selectedBook.bookSynopsis}</p>
                </div>
            </div>
        </div>
         );
    }
}
 
export default Book;
