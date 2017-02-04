import React from 'react';

import shopifyAPI from 'shopifyAPI';
import Cart from 'Cart';

class Store extends React.Component {
  constructor() {
    super();
    this.state = {
      cartOpen: false,
      cartItems: []
    };

    this.addToCart = this._addToCart.bind(this);
    this.closeCart = this._closeCart.bind(this);
  }

  render() {
    let {cartOpen, products} = this.state
    let productId;

    const childrenWithProps = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
       addToCart: this.addToCart
      });
    });

    return (
      <div>
        <Cart cartItems={this.state.cartItems} cartOpen={cartOpen} closeCart={this.closeCart} />
        <div>
          {childrenWithProps}
        </div>
      </div>
    );
  }

  _openCart(){
    this.setState({cartOpen: true});
  }

  _closeCart() {
    this.setState({cartOpen: false});
  }

  _addToCart(product){
    let variantId = product.selectedVariant.id;

    if(this.state.cartItems.length > 0){
      if(!this._checkIfItemExistsInCart(variantId)){
        this.setState({
          cartItems: this.state.cartItems.concat([product.selectedVariant])
        })
      }else{
        console.log('increment quantity');
      }
    }else{
      this.setState({
        cartItems: this.state.cartItems.concat([product.selectedVariant])
      })
    }

    this._openCart();
  }

  _checkIfItemExistsInCart(productId){
    for (let item of this.state.cartItems){
      if (item.id === productId){
        return true;
      }else{
        return false;
      }
    }
  }
}

module.exports = Store;
