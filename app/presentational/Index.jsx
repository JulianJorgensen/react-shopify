import React from 'react';
import ReactMarkdown from 'react-markdown';
import DocumentMeta from 'react-document-meta';

import Newsletter from 'Newsletter';
import VideoPlayer from 'VideoPlayer';
import VideoPlayButton from 'VideoPlayButton';
import ContactMethod from 'ContactMethod';

class Index extends React.Component{
  constructor(){
    super();
  }

  render() {
    return (
      <div>
        <section className="section-landing">
          {/* newsletter signup */}
          <div className="landing-content-wrapper">
            <h2>Experience sex on a whole new level</h2>
            <h3><i>for conscious couples</i></h3>
            <VideoPlayButton id="player-watch" />
          </div>

          {/* landing video */}
          <div className="landing-video-overlay"></div>
          <video className="landing-video" autoPlay loop muted playsInline poster="/images/landing-bg.jpg">
            <source src="/videos/elevatesex-bg-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Video Player */}
          <VideoPlayer/>
          <Newsletter/>
        </section>

        <section className="section">
          <div className="container">
            <p className="lead">Sex is the source of life. When the source is elevated your life awakens. Through this activation we became empowered, unified and purposeful. Feeling a deeper authenticity in our relationship(s). Confidence and love radiated through our bodies. </p>
            <p className="lead">An undeniable energy kept pointing us towards a deeper sense of who we truly are. For lack of better words, it was a spiritual orgasm. This magic continues to be alive between us.</p>
            <p className="lead">Inspired by tantric communities, we feel called to share and create these experiences with you; to Elevate Sex.</p>
            <p className="lead">Welcome to the community.</p>
            <h2><ContactMethod /></h2>
          </div>
        </section>
      </div>
    )
  }
}

module.exports = Index;
