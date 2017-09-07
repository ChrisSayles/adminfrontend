import {
  INMATE_LIST,
  INMATE_LIST_LOADING,
  INMATE_LIST_ERROR ,
} from './types';
import axios from 'axios';

export const inmateListFind = () =>  {
  return (dispatch) => {
    console.log('inmateListFind Action')
    setTimeout(() => {
      dispatch({ type: INMATE_LIST_ERROR })
    }, 5000)
    axios.get('https://adminapi-gse00012258.apaas.us6.oraclecloud.com/api/inmate/byPrisonID?id=0')
      .then(inmates => inmatesFound(dispatch, inmates))
  }
}

const inmatesFound = (dispatch, inmates) => {
  dispatch({
    type: INMATE_LIST,
    payload: inmates
  })
}
