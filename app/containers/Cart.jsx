import React from 'react';
import CartItem from 'Cart-item';

class Cart extends React.Component {
  render() {
    return (
      <div className={"cart " + (this.props.cartOpen ? 'js-active' : '' )}>
        <div className="cart-section cart-section--top">
          <h2 className="cart-title">Your cart: {this.props.cartOpen}</h2>
          <button className="btn--close">
            <div onClick={this.props.closeCart}>×</div>
            <span className="visuallyhidden">Close</span>
          </button>
        </div>

        <div className="cart-form">
          <div className="cart-item-container cart-section">
            <div>
              {this.props.cartItems.map(item => {
                return <CartItem key={item.id} id={item.id} title={item.productTitle} variantTitle={item.title} price={item.price} quantity={item.quantity} images={item.attrs.product.images} />
              })}
            </div>
          </div>

          <div className="cart-bottom">
            <div className="cart-info clearfix cart-section">
              <div className="type--caps cart-info__total cart-info__small">Total</div>
              <div className="cart-info__pricing">
                <span className="cart-info__small cart-info__total">CAD</span>
                <span className="pricing pricing--no-padding"></span>
              </div>
            </div>
            <div className="cart-actions-container cart-section type--center">
              <div className="cart-discount-notice cart-info__small">Shipping and discount codes are added at checkout.</div>
              <input type="submit" className="btn btn--cart-checkout" id="checkout" name="checkout" value="Checkout" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Cart;
