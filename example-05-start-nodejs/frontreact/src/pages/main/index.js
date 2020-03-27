import React, {Component} from "react"
import api from "../../services/api"
import "./styles.css"
import Header from "../../components/header/header"

import {Link} from "react-router-dom"

export default class Main extends Component{

    state = {
        products: [],
        productsListInfos: [],
        page:1
    }


    componentDidMount(){
        this.loadProducts()
    }


    loadProducts = async (page = 1) =>{
        const response = await api.get(`/products?page=${page}`)
        const {docs, ...productsListInfos} = response.data
        this.setState({products: docs, productsListInfos, page})
    }

    pageNext = () =>{
        const {page, productsListInfos} = this.state
        if(page == productsListInfos.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber)
    }

    pagePrev = () =>{
        const { page} = this.state
        
        if(page == 1) return;
        const pageNumber = page - 1;
        this.loadProducts(pageNumber)
    }


    render(){

        const { products, page, productsListInfos} = this.state;

        return(
        <>
                <Header>
                    Home Number One
                </Header>
                <div className="products-list">
                    {products.map( product =>(
                        <article key={product._id}>
                            <strong>{product.title}</strong>
                            <p>{product.description}</p> 
                            <Link to={`/product/${product._id}`}>Acessar</Link>
                        </article>
                    ))}
                    <div className="container-actions">
                        <button type="button" disabled={page == 1} onClick={this.pagePrev}>Anterior</button>
                        <button type="button" disabled={page == productsListInfos.pages} onClick={this.pageNext}>Proximo</button>

                    </div>
                </div>
        </>
        )
    }
}