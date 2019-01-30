import React, { Component } from 'react';
import { BOOKDISPLAY } from './../constants/constants';

class FeaturedBook extends Component {
    state = {

    }

    removeFeatured = () => {
        this.props.removeFeatured(this.props.index)
    }

    updateBook = () => {
        this.props.updateBook(this.props.books, this.props.index)
    }

    render() {
        return (
            <div className="container featuredBook-container">
                <div className="row">
                    <div className="col-sm-6">
                        {/* will render page for selected book */}
                        <h5 onClick={() => {
                            this.props.selectedBook(this.props.books)
                            this.props.changePath(BOOKDISPLAY)
                        }}>{this.props.books.bookTitle}</h5>
                        <p>{this.props.books.bookSynopsis}</p>
                    </div>
                    <div className="col-sm-6 featuredBookImg-container image">
                        {/* will render page for selected book */}
                        <img src={this.props.books.bookImg} alt=""
                            onClick={() => {
                                this.props.selectedBook(this.props.books)
                                this.props.changePath(BOOKDISPLAY)
                            }} />
                        {/* if admin is logged in show update and add buttons */}
                        {this.props.goodLogin === true &&
                            <button className="btn btn-danger float-right"
                                onClick={this.removeFeatured}>X</button>
                        }
                        {this.props.goodLogin === true &&
                            <button
                                className="btn btn-info float-right"
                                onClick={this.updateBook}>↻</button>
                        }



                    </div>
                </div>

            </div>
        );
    }
}


export default FeaturedBook;