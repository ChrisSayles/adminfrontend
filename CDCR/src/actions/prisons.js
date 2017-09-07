import {
  PRISON_LIST,
  PRISON_LIST_LOADING,
  PRISON_LIST_ERROR ,
} from './types';
import axios from 'axios';

export const prisonListFind = () =>  {
  return (dispatch) => {
    console.log('prisonListFind Action')
    setTimeout(() => {
      dispatch({ type: PRISON_LIST_ERROR })
    }, 5000)
    axios.get('https://adminapi-gse00012258.apaas.us6.oraclecloud.com/api/population?id=0')
      .then(prisons => prisonsFound(dispatch, prisons))
  }
}

const prisonsFound = (dispatch, prisons) => {
  dispatch({
    type: PRISON_LIST,
    payload: prisons
  })
}
