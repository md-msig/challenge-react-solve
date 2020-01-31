import {GET_MACHINES_ERROR, GET_MACHINES_REQUEST, GET_MACHINES_SUCCESS} from "../constants";

export const getMachinesSelector = (state: Object) => ({ ...state.machines });

export const machinesReducer = (state: Object = {
    machines: [],
    isLoading: false,
    isEnd: false,
    error: false,
}, action: Object) => {
    switch (action.type) {
        case GET_MACHINES_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                error: false,
                machines: action.payload.machines
            };
        }
        case GET_MACHINES_REQUEST: {
            return {
                isLoading: true,
                error: false,
                machines: [],
            };
        }
        case GET_MACHINES_ERROR: {
            return {
                ...state,
                isLoading: false,
                error: true,
            };
        }
        default: {
            return state;
        }
    }
};
