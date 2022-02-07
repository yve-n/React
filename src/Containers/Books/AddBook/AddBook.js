import React, {Component} from "react";
import {withFormik} from "formik";
import * as Yup from "yup";


class AddBook extends Component{
    render(){
        return(
            <>
            <h2 className="text-center" style={{fontFamily: 'Quintessential'}}>Ajouter un livre</h2>
            <form>
            <div class="mb-3">
                <label htmlFor="name" class="form-label">Nom : </label>
                <input type="text" className="form-control" id="name" 
                value={this.props.values.name} 
                onChange={this.props.handleChange}/>
            </div>
            <div class="mb-3">
                <label htmlFor="author" class="form-label">Auteur : </label>
                <input type="text" className="form-control" id="author" 
                value={this.props.values.author} 
                onChange={this.props.handleChange}/>
            </div>
            <div class="mb-3">
                <label htmlFor="year" class="form-label">Année : </label>
                <input type="text" className="form-control" id="year" 
                value={this.props.values.year} 
                onChange={this.props.handleChange}/>
            </div>
            <div class="mb-3">
                <label htmlFor="price" class="form-label">Prix : </label>
                <input type="text" className="form-control" id="price" 
                value={this.props.values.price} 
                onChange={this.props.handleChange}/>
            </div>
            <div class="mb-3">
                <label htmlFor="country" class="form-label">Pays : </label>
                <input type="text" className="form-control" id="country" 
                value={this.props.values.country} 
                onChange={this.props.handleChange}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={this.props.handleSubmit}>Add</button>
            </form>
            </>
        )
    }
}
export default  withFormik({
    mapPropsToValues:()=>({
        name:"",
        author:"",
        year:"",
        price:"",
        country:"",

    })
})( AddBook);