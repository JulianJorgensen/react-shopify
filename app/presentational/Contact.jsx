import React from 'react';
import ReactMarkdown from 'react-markdown';
import DocumentMeta from 'react-document-meta';

import Newsletter from 'Newsletter';
import ContactMethod from 'ContactMethod';

class Contact extends React.Component{
  constructor(){
    super();
  }

  render() {
    return (
      <section className="section">
        <h1>Contact</h1>
        <div className="container">
          <ContactMethod />
        </div>
      </section>
    )
  }
}

module.exports = Contact;
