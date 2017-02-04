import React from 'react';
var _ = require('lodash');

import shopifyAPI from 'shopifyAPI';
import Product from 'Product';
import ProductItem from 'ProductItem';

class Products extends React.Component {
  constructor(){
    super();

    this.state = {
      products: []
    };
  }

  componentDidMount() {
    shopifyAPI.getAllProducts().then((products) => {
      this.setState({ products: products });
    })
    .catch(function() {
      console.log('Request to get products failed');
    });
  }

  render() {
    let {products} = this.state;
    let productId = this.props.router.params.productId;

    if (products.length > 0) {
      if (productId){
        let currentProduct = _.find(products, ['id', parseInt(productId)]);
        return (
          <Product addToCart={() => this._handleAddToCart(currentProduct)} productObj={currentProduct} />
        )
      }else{
        return (
          <div className="row">
            {products.map(product => {
              return <ProductItem key={product.id} addToCart={() => this._handleAddToCart(product)} id={product.id} title={product.title} />
            })}
          </div>
        )
      }
    }else{
      return (
        <div>Loading products...</div>
      )
    }
  }

  _handleAddToCart(product){
    this.props.addToCart(product);
  }
}

module.exports = Products;
