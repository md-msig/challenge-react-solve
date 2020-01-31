import {GET_MACHINE_HEALTH_ERROR, GET_MACHINE_HEALTH_REQUEST, GET_MACHINE_HEALTH_SUCCESS} from "../constants";

export const getMachineHealthSelector = (state: Object) => ({ ...state.machine_health });

export const machineHealthReducer = (state: Object = {
    machine_health: [],
    isLoading: false,
    isEnd: false,
    error: false,
}, action: Object) => {
    switch (action.type) {
        case GET_MACHINE_HEALTH_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                error: false,
                machine_health: action.payload.machine_health
            };
        }
        case GET_MACHINE_HEALTH_REQUEST: {
            return {
                isLoading: true,
                error: false,
                machine_health: [],
            };
        }
        case GET_MACHINE_HEALTH_ERROR: {
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
