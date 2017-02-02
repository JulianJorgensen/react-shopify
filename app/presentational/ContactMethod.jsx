import React from 'react';

class ContactMethod extends React.Component{
  constructor(){
    super();
  }

  render() {
    let {type} = this.props;

    switch (type){
      default:
        return (
          <a href="mailto:elevate@elevatesex.com">elevate@elevatesex.com</a>
        )
    }
  }
}

module.exports = ContactMethod;
