import React from 'react';
import ReactMarkdown from 'react-markdown';
import DocumentMeta from 'react-document-meta';
import YouTube from 'react-youtube'

import Newsletter from 'Newsletter';

class Index extends React.Component{
  constructor(){
    super();

    this.state = {
      playVideo: false,
      loadingVideo: false
    }

    let player;
  }

  playVideo() {
    this.setState({
      loadingVideo: true
    });
    this.player.playVideo();
  }

  render() {
    return (
      <div>
        <section className="section-landing">
          {/* newsletter signup */}
          <div className="landing-content-wrapper">
            <h2>Experience sex on a whole new level</h2>
            <h3><i>for conscious couples</i></h3>
            <div id="player-watch" className="button large" onClick={this.playVideo.bind(this)}><span className="watch">watch</span> <i className={this.state.loadingVideo ? 'fa fa-spinner fa-pulse fa-fw' : 'fa fa-play-circle'}></i></div>
            <Newsletter/>
          </div>

          {/* landing video */}
          <div className="landing-video-overlay"></div>
          <video className="landing-video" autoPlay loop muted playsInline poster="/images/landing-bg.jpg">
            <source src="/videos/elevatesex-bg-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* YT Player */}
          <div id="player-wrapper" className={this.state.playVideo ? '' : 'transparent'}>
            <YouTube
              id="player"
              videoId="2g811Eo7K8U"
              opts={{
                playerVars: {
                  autohide: 0,
                  showinfo: 0
                }
              }}
              onReady={this._onReady.bind(this)}
              onPlay={this._onPlay.bind(this)}
            />
          </div>
        </section>

        <section className="section">
          <h2><a data-email-protector="elevate|elevatesex.com">elevate@elevatesex.com</a></h2>
        </section>

      </div>
    )
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    this.player = event.target;
  }

  _onPlay(event) {
    this.setState({
      playVideo: true,
      loadingVideo: false
    });
  }
}

module.exports = Index;
