import produce, { finishDraft } from 'immer';

export const initialState = {};

const reducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      default: {
      }
    }
  });
};

export default reducer;
