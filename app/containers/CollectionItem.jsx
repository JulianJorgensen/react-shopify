import React from 'react';

class CollectionItem extends React.Component {
  render() {
    let {title, id} = this.props;

    return (
      <div>
        <h1 className="text-center"><a href={'#/collection/' + id}>Collection id: {id}</a></h1>
        <h2 className="text-center">Collection title: {title}</h2>
      </div>
    )
  }
}

module.exports = CollectionItem;
