import React from 'react';
import Header from 'Header';
import DocumentMeta from 'react-document-meta';

class Main extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      title: '',
      content: ''
    };
  }

  componentWillMount() {
    // contentAPI.fetchEntry('6GWX6wq58skQUYGUWaggEu').then((entry) => {
    //   this.setState({
    //     title: entry.title,
    //     content: entry.body
    //   });
    // });
  }

  render() {
    const meta = {
      title: 'Rep Your City',
      description: 'Rep Your City description',
      meta: {
        charset: 'utf-8'
      },
      auto: {
        ograph: true
      }
    };

    return (
      <div>
        <DocumentMeta {...meta} />
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

module.exports = Main;
