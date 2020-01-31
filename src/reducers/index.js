import { combineReducers } from 'redux';
import {machinesReducer} from './machines-reducer';
import {machineHealthReducer} from './machine-health-reducer';

// Root Reducer
const rootReducer = combineReducers({
  machines: machinesReducer,
  machine_health: machineHealthReducer,
});

export default rootReducer;
