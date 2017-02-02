export var routeLocationDidUpdate = (router) => {
  return {
    type: 'UPDATE_ROUTER',
    router
  };
};

export var toggleNavIcon = () => {
  return {
    type: 'TOGGLE_NAV_ICON'
  };
};

export var toggleNav = () => {
  console.log('toggling nav');
  return {
    type: 'TOGGLE_NAV'
  };
};

export var closeNav = () => {
  console.log('closing nav');
  return {
    type: 'CLOSE_NAV'
  };
};

export var createPlayer = (player) => {
  return {
    type: 'CREATE_PLAYER',
    player
  };
};

export var startPlayVideo = () => {
  return {
    type: 'START_PLAY_VIDEO'
  };
};

export var playVideo = () => {
  return {
    type: 'PLAY_VIDEO'
  };
};

export var stopVideo = (player) => {
  player.stopVideo();
  return {
    type: 'STOP_VIDEO'
  };
};
