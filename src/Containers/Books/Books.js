import React,{Component} from "react";
import AddBook from "./AddBook/AddBook";
import axios from 'axios';

class Books extends Component{

    state={
        books:
        [
            // {
            //     "id": 1,
            //     "name" : "Harry Potter",
            //     "author" : "J.K Rowling",
            //     "year" : 1997,
            //     "price" : 50.0,
            //     "country" : "UK"
            // },
            // {
            //     "id": 2,
            //     "name" : "Lord of the Rings",
            //     "author" : "J.R.R Tolkien",
            //     "year" : 1954,
            //     "price" : 39.0,
            //     "country" : "UK",
            // },
            // {
            //     "id": 3,
            //     "name" : "1984",
            //     "author" : "George Orwell",
            //     "year" : 1948,
            //     "price" : 49.99,
            //     "country" : "UK"
            // },
            // {
            //     "id": 4,
            //     "name" : "Artemis Fowl",
            //     "author" : "Eoin Colfer",
            //     "year" : 2001,
            //     "price" : 44.99,
            //     "country" : "Irish"
            // },
            // {
            //     "id": 5,
            //     "name" : "Mathilda",
            //     "author" : "Roald Dahl",
            //     "year" : 1988,
            //     "price" : 24.99,
            //     "country" : "UK"
            // }

        ]

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
                        return(
                            <tr key={book.id}>
                                <td>{book.name}</td>
                                <td>{book.author}</td>
                                <td>{book.year}</td>
                                <td>{book.price}</td>
                                <td>{book.country}</td>
                                <td><button className="btn btn-success">Edit</button></td>
                                <td><button className="btn btn-danger">Delete</button></td>

                            </tr>
                        )
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