import React, { Component } from 'react'
import './ProductMenu.css'
import { Link } from 'react-router-dom'

class Delete extends Component {

  deleteProduct(name) {
    fetch('/api/products/delete/' + name, {
      method: 'delete'
    });
  }

  render() {
    return <a 
      className='button' 
      href="#"
      onClick={ () => this.deleteProduct(this.props.productName) }
    >Delete</a>
  }
}

class ProductItem extends Component {
  render() {
    const name = this.props.product.name
    return <div className='product-item'>
      <div className='name'>
        <Link to={'/products/' + name}>{name}</Link> 
        <Delete productName={name} />
      </div>
    </div>
  }
}

class ProductMenu extends Component {
  render() {
    return <div className='product-menu'>
      {this.props.products.map(
        (p, i) => <ProductItem product={p} key={'product-' + i} />
      )}
    </div>
  }
}

export default ProductMenu