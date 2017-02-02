export var navReducer = (state = {showClose: false, showNav: false}, action) => {
  switch (action.type) {
    case 'TOGGLE_NAV_ICON':
      return {
        ...state,
        showClose: !state.showClose,
        showNav: state.showNav
      };
    case 'TOGGLE_NAV':
      return {
        ...state,
        showClose: !state.showClose,
        showNav: !state.showNav
      };
    case 'CLOSE_NAV':
      return {
        ...state,
        showClose: false,
        showNav: false
      };
    default:
      return state;
  }
};

export var videoReducer = (state = {playVideo: false, loadingVideo: false}, action) => {
  switch (action.type) {
    case 'CREATE_PLAYER':
      return {
        ...state,
        player: action.player
      };
    case 'START_PLAY_VIDEO':
      return {
        ...state,
        loadingVideo: true
      };
    case 'PLAY_VIDEO':
      return {
        ...state,
        playVideo: true,
        loadingVideo: false
      };
    case 'STOP_VIDEO':
      return {
        ...state,
        playVideo: false,
        loadingVideo: false
      };
    default:
      return state;
  }
};
