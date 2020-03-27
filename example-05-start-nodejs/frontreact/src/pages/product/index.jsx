import React, {Component} from "react"
import Header from "../../components/header/header"
import "./styles.css"
import api from "../../services/api"
import {Link} from "react-router-dom"

class Product extends Component {

    state = {
        product: {}
    }

    async componentDidMount(){
        const {id} = this.props.match.params

        const response = await api.get(`/products/${id}`)

        this.setState({product: response.data})
    }

    render(){

        const {product} = this.state

        return(
            <>
                <Header>Page {product._id}</Header>
                <section className="product-infos">
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <p>
                        URL: <a href={product.url}>{product.url}</a>
                    </p>
                </section>
                <footer>
                    <Link to="/">Voltar</Link>
                </footer>
            </>
        )
    }
}

export default Product