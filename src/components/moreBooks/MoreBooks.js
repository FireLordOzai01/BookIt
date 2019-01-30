import React, { Component } from 'react';
import { BOOKDISPLAY } from './../constants/constants';

class MoreBooks extends Component {
    state = { 

     }

     addFeatured = () => {
         this.props.addFeatured(this.props.index)
     }

     updateBook =() => {
        this.props.updateBook(this.props.books, this.props.index)
     }

    render() { 
        return ( 
            <div className="container book-container">
            <div className="row">
                <div className="col-sm-6 bookImg-container image">
                    
                    
                    <img src={this.props.books.bookImg} alt=""
                         onClick={() => {
                         this.props.selectedBook(this.props.books)
                         this.props.changePath(BOOKDISPLAY)
                         }}/>
                </div>
                {/* will render page for selected book */}
                <div className="col-sm-6 bookInfo-container">
                    <h5 onClick={() => {
                        this.props.selectedBook(this.props.books)
                        this.props.changePath(BOOKDISPLAY)
                    }}>{this.props.books.bookTitle}</h5>
                    {/* if admin is logged in show update and add buttons */}
                    {this.props.goodLogin === true &&
                        <button className="btn btn-info float-right"
                                onClick={this.updateBook}>↻</button>
                    }
                    {this.props.goodLogin === true && this.props.books.isFeatured === false &&
                        <button className="btn btn-success float-right"
                                onClick={this.addFeatured}>+</button>
                    }
                    <div>
                        <p>{this.props.books.bookSynopsis}</p>
                    </div>
                    
                </div>

                
            
            </div>
        </div>
         );
    }
}
 
export default MoreBooks;

// const MoreBooks = (props) => {
//     return ( 
//         <div className="container book-container">
//             <div className="row">
//                 <div className="col-sm-6 bookImg-container image">
//                     {props.goodLogin === true &&
//                         <button className="btn btn-info float-right">↻</button>
//                     }
//                     {props.goodLogin === true &&
//                         <button className="btn btn-success float-right"
//                                 onClick={props.addFeatured}>+</button>
//                     }
//                     <img src={props.books.bookImg} alt=""
//                          onClick={() => {
//                          props.selectedBook(props.books)
//                          props.changePath(BOOKDISPLAY)
//                          }}/>
//                 </div>
//                 <div className="col-sm-6 bookInfo-container">
//                     <h5 onClick={() => {
//                         props.selectedBook(props.books)
//                         props.changePath(BOOKDISPLAY)
//                     }}>{props.books.bookTitle}</h5>
//                     <p>{props.books.bookSynopsis}</p>
//                 </div>

                
            
//             </div>
//         </div>
//      );
// }
 
// export default MoreBooks;