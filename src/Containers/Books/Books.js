import React,{Component} from "react";
import AddBook from "./AddBook/AddBook";
import axios from 'axios';
import UpdateBook from "./UpdateBook/UpdateBook";

class Books extends Component{

    state={
        books:[],
        bookToModify:0
    }   

    componentDidMount =()=>{
        const books = [];
        axios.get("https://appbooks-f9245-default-rtdb.europe-west1.firebasedatabase.app/books.json")
            .then(response =>{
                // console.log(response)
                Object.entries(response.data).forEach(([key, book])=>{
                    // console.log(key);
                    books.push(book);
                })
                this.setState({books: books});
            })
            .catch(error =>{
                 console.log(error)
            })
       
    }
    addBookHandler = (book) =>{
        console.log("nom du livre " + book.name);
        const books =[...this.state.books];
        const id = Math.max(...books.map(b => b.id), 0) + 1;
        book.id = id;
        axios.post("https://appbooks-f9245-default-rtdb.europe-west1.firebasedatabase.app/books.json", book)
        .then(response=>{
            // console.log(response)
             books.push(book);
             this.setState({books: books});
                
            })
            .catch(error => {
                // console.log(error)
            });
    }
    handleDelete =(id) =>{
        console.log("supprimer le livre : " + id);
        const index = this.state.books.findIndex(book=>{
            return book.id === id
        })
        console.log("index du livre: " + index)
        const books =[...this.state.books];
        books.splice(index, 1);
        this.setState({books: books})
    }
    handleUpdate = (book) =>{
        console.log("Livre à modifier : " + book.name);
        const index = this.state.books.findIndex(b => {
            return b.id === book.id
        });
        const books = [...this.state.books];
        books[index] = book;
        this.setState({books, bookToModify: 0})

    }
    setToModify =(id)=>{
        this.setState({bookToModify:id})
    }
    render(){
        return(
            <>
            <table className="table table-stripped text-center">
                <thead>
                    <tr>
                        <th>Titre</th>
                        <th>Auteur</th>
                        <th>Année</th>
                        <th>Prix</th>
                        <th>Pays</th>
                        <th colSpan="2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                   { this.state.books.map(book =>{
                       if(book.id !== this.state.bookToModify){
                           return(
                               <tr key={book.id}>
                                   <td>{book.name}</td>
                                   <td>{book.author}</td>
                                   <td>{book.year}</td>
                                   <td>{book.price}</td>
                                   <td>{book.country}</td>
                                   <td><button onClick={()=>this.setToModify(book.id)} className="btn btn-success">Edit</button></td>
                                   <td><button onClick={() =>this.handleDelete(book.id)} className="btn btn-danger">Delete</button></td>
   
                               </tr>
                           )
                       }else{
                            return(
                                <tr key={book.id}>
                                    <UpdateBook modifyBook={(book) => this.handleUpdate(book)} {...book} />
                                </tr>
                            )
                       }
                    })
                    }

                </tbody>
            </table>

            <AddBook addBookAction={(book) =>this.addBookHandler(book)}/>
            
            </>
        )
    }
}

export default Books;