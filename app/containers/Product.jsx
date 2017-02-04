import React from 'react';

class Product extends React.Component {
  render() {
    let product = this.props.productObj;
    let {id, title, images, selectedVariant, selectedVariantImage, currentOptions} = product;

    // console.log('selectedVariant: ', selectedVariant);
    // console.log('selectedVariantImage: ', selectedVariantImage);
    // console.log('currentOptions: ', currentOptions);

    return (
      <div className="small-6 align-center columns">
        <h1>Product</h1>
        <h1 className="text-center">{title}</h1>
        <h2 className="text-center">{id}</h2>
        <p><img src={selectedVariantImage.src} alt="" /></p>
        <hr />
        <p>Current options:</p>
        {/* {currentOptions.map(option => {
          return <p>{option.title}</p>
        })} */}
        {images.map(image => {
          return <img key={image.id} height="50" width="50" src={image.src} alt="" />
        })}
        <button onClick={this.props.addToCart} className="btn">Add To Cart</button>
      </div>
    )
  }
}

module.exports = Product;
