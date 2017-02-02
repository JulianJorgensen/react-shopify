import React from 'react';
import Header from 'Header';
import contentAPI from 'contentAPI';
import DocumentMeta from 'react-document-meta';
import myfont from 'KefaFont';

class Main extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      title: '',
      content: ''
    };
  }

  componentWillMount() {
    contentAPI.fetchEntry('6GWX6wq58skQUYGUWaggEu').then((entry) => {
      this.setState({
        title: entry.title,
        content: entry.body
      });
    });
  }

  render() {
    const meta = {
      title: 'Elevate your life through sex | ElevateSex.com',
      description: 'Elevate the very essence of life - sex. Join Jocelyn and Julian on a tantric journey with powerful tips and insights.',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'Sexuality, Tantra, Couples'
        }
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
