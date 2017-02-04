import React from 'react';
var _ = require('lodash');

import shopifyAPI from 'shopifyAPI';
import Collection from 'Collection';
import CollectionItem from 'CollectionItem';

class Collections extends React.Component {
  constructor(){
    super();

    this.state = {
      collections: []
    };
  }

  componentDidMount() {
    shopifyAPI.getAllCollections().then((collections) => {
      this.setState({ collections: collections });
    })
    .catch(function() {
      console.log('Request to get collections failed');
    });
  }

  render() {
    let {collections} = this.state;
    let collectionId = this.props.router.params.collectionId;

    if (collections.length > 0) {
      if (collectionId){
        // let currentCollection = _.find(collections, ['id', parseInt(collectionId)]);
        let getCurrentCollection = () => {
          return collections.filter((collection) => {
            if (collection.attrs.collection_id === parseInt(collectionId)){
              return true;
            }
          });
        };

        return (
          <Collection key={collectionId} collectionObj={getCurrentCollection()[0]} />
        )
      }else{
        return (
          <div>
            {collections.map(collection => {
              return <CollectionItem key={collection.attrs.collection_id} id={collection.attrs.collection_id} title={collection.attrs.title} />
            })}
          </div>
        )
      }
    }else{
      return (
        <div>Loading collections...</div>
      )
    }
  }
}

module.exports = Collections;
