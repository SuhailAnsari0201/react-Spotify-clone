export const soundInitialState = {
  audio: null,
  playing: false,
  volume: 0.3,
  repeat: false,
  shuffle: false,
};

const soundReducer = (state, action) => {
  console.log(action.type);

  switch (action.type) {
    default:
      return {
        state,
      };
  }
};

export default soundReducer;
