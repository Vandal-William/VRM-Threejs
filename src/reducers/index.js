const initialState = {
    vrm: null
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'SAVE_VRM':
      return {
        ...state, 
        vrm: action.vrm
      };
    default:
      return state;
  }
}

export default reducer;