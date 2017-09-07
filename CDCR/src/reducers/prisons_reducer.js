import {
  PRISON_LIST,
  PRISON_LIST_LOADING,
  PRISON_LIST_ERROR
} from '../actions/types';

const INITIAL_STATE = {
  prisonsList: '',
  prisons_loading: false,
  prisons_loading_error: false
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case PRISON_LIST:
      console.log('Prison List');
      return { ...state, prisons_loading: false, prisonsList: action.payload};
    case PRISON_LIST_LOADING:
      console.log('list loading')
      return { ...state, prisons_loading: true};
    default:
      return state;
  }
}
