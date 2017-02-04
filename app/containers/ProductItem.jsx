import React from 'react';

class ProductItem extends React.Component {
  render() {
    let {title, id} = this.props;

    return (
      <div className="small-4 columns">
        <h5 className="text-center"><a href={'/product/' + id}>Product id: {id}</a></h5>
        <h6 className="text-center">{title}</h6>
        <button onClick={this.props.addToCart} className="btn">Add To Cart</button>
      </div>
    )
  }
}

module.exports = ProductItem;
