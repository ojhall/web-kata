import React, { Component } from 'react'
import './Products.css'

class Products extends Component {
    render() {
        return <div> {this.props.products.map(p => <Product product={p} />)}
        </div>;
    }
}

class Product extends Component {
    render() {

        const isFree = this.props.product.free;
        const isNew = this.props.product.new;
        const productNameElement = <span className="productName">{this.props.product.name}</span>;
        const productDescElement = this.props.product.description;
        const productFreeElement = <span className="freeProduct"> FREE!</span>;
        const productNewElement = <span className="newProduct"> NEW!</span>;

        return <div key={this.props.product.name} className="product">
            {productNameElement} - {productDescElement}{isFree && productFreeElement}{isNew && productNewElement}
        </div>;
    }
}

export default Products;