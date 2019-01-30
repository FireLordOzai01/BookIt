import React, { Component } from 'react';

class AddUpdateBook extends Component {
    state = { 
        bookTitle: "",
        bookAuthor: "",
        bookGenre: "",
        bookSynopsis: "",
        bookImg: "",
        bookRating: "",
        bookQuantity: "",
        inStock: true,
        isFeatured: false
     }

     addBook = (event) => {
        this.props.addBook(this.state, event);
        
        this.setState({
            bookTitle: "",
            bookAuthor: "",
            bookGenre: "",
            bookSynopsis: "",
            bookImg: "",
            bookRating: "",
            bookQuantity: "",
            inStock: true,
            isFeatured: false 
        });
     }

// is triggered when update button is clicked on FeaturedBook or MoreBooks component
     componentWillReceiveProps = props => {
         if(props.updatingBook != null) {
             this.setState({
                bookTitle: props.updatingBook.bookTitle,
                bookAuthor: props.updatingBook.bookAuthor,
                bookGenre: props.updatingBook.bookGenre,
                bookSynopsis: props.updatingBook.bookSynopsis,
                bookImg: props.updatingBook.bookImg,
                bookRating: props.updatingBook.bookRating,
                bookQuantity: props.updatingBook.bookQuantity,
                inStock: props.updatingBook.inStock,
                isFeatured: props.updatingBook.isFeatured
             })
         }
     }

     
     addUpdatedBook = (event) => {
         this.props.addUpdatedBook(this.state, this.props.updatingBookIndex, event);

         this.setState({
            bookTitle: "",
            bookAuthor: "",
            bookGenre: "",
            bookSynopsis: "",
            bookImg: "",
            bookRating: "",
            bookQuantity: "",
            inStock: true,
            isFeatured: false 
        });
     }

    render() { 
        return ( 
            <div>
                <form id="addUpdate">
                    <div className="form-row">
                        <div className="form-group col-sm-4">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Book Title"
                                value={this.state.bookTitle}
                                autoFocus
                                onChange={(e) => {this.setState({bookTitle: e.target.value})}}
                                />
                        </div>
                        <div className="form-group col-sm-4">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Author"
                                value={this.state.bookAuthor}
                                onChange={(e) => {this.setState({bookAuthor: e.target.value})}}
                                />
                        </div>
                        <div className="form-group col-sm-4">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Genre"
                                value={this.state.bookGenre}
                                onChange={(e) => {this.setState({bookGenre: e.target.value})}}
                                />
                        </div>
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Image URL"
                            value={this.state.bookImg}
                            onChange={(e) => {this.setState({bookImg: e.target.value})}}
                            />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Synopsis"
                            value={this.state.bookSynopsis}
                            onChange={(e) => {this.setState({bookSynopsis: e.target.value})}}
                            />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-sm-2">
                            <div className="form-check">
                                <input 
                                    type="checkbox" 
                                    className="form-check-input" 
                                    id="isFeatured"
                                    value={JSON.parse("true")}
                                    onChange={(e) => {this.setState({isFeatured: JSON.parse(e.target.value)})}}
                                    // onChange={(e) => {this.setState({isFeatured: e.target.value})}}
                                    />
                                <label htmlFor="isFeatured" className="form-check-label">Featured</label>
                            </div> 
                        </div>
                        <div className="form-group col-sm-2">
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Quantity"
                                value={this.state.bookQuantity}
                                onChange={(e) => {this.setState({bookQuantity: e.target.value})}}
                                />
                        </div>
                        <div className="form-group col-sm-2">
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Rating"
                                value={this.state.bookRating}
                                onChange={(e) => {this.setState({bookRating: e.target.value})}}
                                />
                        </div>
                    </div>
                    <div className="addBook-btn-container">
                        <button 
                            className="btn btn-primary"
                            onClick={this.addBook}
                        >Add Book</button>
                        <button 
                            className="btn btn-warning"
                            onClick={this.addUpdatedBook}
                        >Update Book</button>
                        <button className="btn btn-success float-right"
                                onClick={this.props.adminLogOut}
                        >Log Out</button>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default AddUpdateBook;