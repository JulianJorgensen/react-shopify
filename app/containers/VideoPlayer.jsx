import React from 'react';
let {connect} = require('react-redux');
let actions = require('actions');

import YouTube  from 'react-youtube';

class VideoPlayer extends React.Component{
  constructor(){
    super();
  }

  render() {
    let {dispatch, video} = this.props;

    if(video.loadingVideo || video.playVideo){
      return (
        <div id="player-wrapper" className={video.playVideo ? '' : 'transparent'}>
          <YouTube
            id="player"
            videoId="xBV5j-Bg77A"
            opts={{
              playerVars: {
                autohide: 0,
                showinfo: 0
              }
            }}
            onReady={(event)=>{
              // access to player in all event handlers via event.target
              let player = event.target;
              player.playVideo();
              dispatch(actions.createPlayer(player));
            }}
            onPlay={(event)=>{
              dispatch(actions.toggleNavIcon());
              dispatch(actions.playVideo());
            }}
          />
        </div>
      )
    }else{
      return (
        <div></div>
      )
    }
  }
}

export default connect(
  (state) => {
    return {
      video: state.video
    }
  }
)(VideoPlayer);
