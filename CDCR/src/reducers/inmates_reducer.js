import {
  INMATE_LIST,
  INMATE_LIST_LOADING,
  INMATE_LIST_ERROR
} from '../actions/types';

const INITIAL_STATE = {
  inmatesList: '',
  inmates_loading: false,
  inmates_loading_error: false
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case INMATE_LIST:
      console.log('Inmate List');
      return { ...state, inmate_loading: false, inmatesList: action.payload};
    case INMATE_LIST_LOADING:
      console.log('list loading')
      return { ...state, inmate_loading: true};
    default:
      return state;
  }
}
