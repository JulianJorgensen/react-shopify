import React from 'react';

class Collection extends React.Component {
  render() {
    let collectionObj = this.props.collectionObj;
    let {collection_id, title} = collectionObj.attrs;
    console.log(collectionObj);

    return (
      <div>
        <h2>Collection title: {title}</h2>
        <h3>CollectionID: {collection_id}</h3>
      </div>
    )
  }
}

module.exports = Collection;
