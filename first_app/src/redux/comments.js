import * as ActionTypes from './ActionTypes';

export const Comments = (state = { errMess: null, comments:[]}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      return {...state, isLoding:false, errMess: null, comments: action.payload};

    case ActionTypes.COMMENTS_FAILED:
      return {...state,isLoding:false, errMess: action.payload, comments: [] };

    case ActionTypes.ADD_COMMENT:
        var comment = action.payload;
        
        return { ...state, comments: state.comments.concat(comment)};

    default:
      return state;
  }
};