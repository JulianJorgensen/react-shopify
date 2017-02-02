import React from 'react';
// import ReactMarkdown from 'react-markdown';
import DocumentMeta from 'react-document-meta';

import Newsletter from 'Newsletter';

class About extends React.Component{
  constructor(){
    super();
  }

  render() {
    return (
      <section className="section">
        <h1>About us</h1>
        <div className="container">
          <p className="lead">Sex is the source of life. When the source is elevated your life awakens. Through this activation we became empowered, unified and purposeful. Feeling a deeper authenticity in our relationship(s). Confidence and love radiated through our bodies. </p>
          <p className="lead">An undeniable energy kept pointing us towards a deeper sense of who we truly are. For lack of better words, it was a spiritual orgasm. This magic continues to be alive between us.</p>
          <p className="lead">Inspired by tantric communities, we feel called to share and create these experiences with you; to Elevate Sex.</p>
          <p className="lead">Welcome to the community.</p>
        </div>
      </section>
    )
  }
}

module.exports = About;
