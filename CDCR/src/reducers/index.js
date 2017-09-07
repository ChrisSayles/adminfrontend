import { combineReducers } from 'redux';
import ToastReducer from './reducer_toast';
import InmatesReducer from './inmates_reducer';
import PrisonsReducer from './prisons_reducer';

const rootReducer = combineReducers({
  toast: ToastReducer,
  inmates: InmatesReducer,
  prisons: PrisonsReducer
});

export default rootReducer;
