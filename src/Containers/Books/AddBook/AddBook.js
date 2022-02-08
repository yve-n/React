import React, {Component} from "react";
import {withFormik} from "formik";
import * as Yup from "yup";


class AddBook extends Component{
    render(){
        return(
            <>
            <h2 className="text-center" style={{fontFamily: 'Quintessential'}}>Ajouter un livre</h2>
            <form>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nom : </label>
                <input type="text" className="form-control" id="name" 
                value={this.props.values.name} 
                onChange={this.props.handleChange}
                onBlur={this.props.handleBlur}/>
                {
                    this.props.errors.name && this.props.touched.name &&
                    <span style={{color:"red"}}>{this.props.errors.name}</span>
                }
            </div>
            <div className="mb-3">
                <label htmlFor="author" className="form-label">Auteur : </label>
                <input type="text" className="form-control" id="author" 
                value={this.props.values.author} 
                onChange={this.props.handleChange}
                onBlur={this.props.handleBlur}/>
                {
                    this.props.errors.author && this.props.touched.author &&
                    <span style={{color:"red"}}>{this.props.errors.author}</span>
                }
            </div>
            <div className="mb-3">
                <label htmlFor="year" className="form-label">Année : </label>
                <input type="number" className="form-control" id="year" 
                value={this.props.values.year} 
                onChange={this.props.handleChange}
                onBlur={this.props.handleBlur}/>
                {
                    this.props.errors.year && this.props.touched.year &&
                    <span style={{color:"red"}}>{this.props.errors.year}</span>
                }
            </div>
            <div className="mb-3">
                <label htmlFor="price" className="form-label">Prix : </label>
                <input type="number" className="form-control" id="price" 
                value={this.props.values.price} 
                onChange={this.props.handleChange}
                onBlur={this.props.handleBlur}/>
                {
                    this.props.errors.price && this.props.touched.price &&
                    <span style={{color:"red"}}>{this.props.errors.price}</span>
                }
            </div>
            <div className="mb-3">
                <label htmlFor="country" className="form-label">Pays : </label>
                <input type="text" className="form-control" id="country" 
                value={this.props.values.country} 
                onChange={this.props.handleChange}
                onBlur={this.props.handleBlur}/>
                {
                    this.props.errors.country && this.props.touched.country &&
                    <span style={{color:"red"}}>{this.props.errors.country}</span>
                }
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
    }),
    validationSchema : Yup.object().shape({
        name : Yup.string()
                    .min(5,"Le nom du livre doit comporter au moins 5 caractères")
                    .max(15,"le nom ne doit pas comporter plus de 15 caractères")
                    .required(),
        author: Yup.string()
                    .required("le nom de l'auteur est requis"),
        price : Yup.number()
                    .required("le prix est requis"),
        year: Yup.number()
                .moreThan(1900, "l'année doit etre sup à 1900")
                .required(),
        country: Yup.string()
                .required("le pays est requis")
    }),
    handleSubmit : (values,{props}) =>{
        // console.log(values);
        props.addBookAction(values);
    }
})( AddBook);