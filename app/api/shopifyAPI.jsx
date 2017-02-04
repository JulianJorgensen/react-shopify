var ShopifyBuy = require('shopify-buy');

// Connect to Shopify Buy SDK
const SHOP_CLIENT = ShopifyBuy.buildClient({
  apiKey: 'e0ab8cf9b5a30cee2616bf151a56c763',
  domain: 'rmc-preview.myshopify.com',
  appId: '6'
});

module.exports = {
  getAllProducts: function () {
    return new Promise(function(resolve, reject) {
       resolve(SHOP_CLIENT.fetchAllProducts());
    });
  },
  getAllCollections: function () {
    return new Promise(function(resolve, reject) {
       resolve(SHOP_CLIENT.fetchAllCollections());
    });
  },
  getProduct: function (productId) {
    return SHOP_CLIENT.fetchProduct(productId);
  },
  getCollection: function (collectionHandle) {
    // fetch a product using resource id
    SHOP_CLIENT.fetchProduct(productId)
      .then(function (product) {
        console.log('product', product);
      })
      .catch(function () {
        console.log('Request failed');
      });
  }
}
