import API from '../api';
import {
    GET_MACHINES_ERROR,
    GET_MACHINES_REQUEST,
    GET_MACHINES_SUCCESS,
    GET_MACHINE_HEALTH_ERROR,
    GET_MACHINE_HEALTH_REQUEST,
    GET_MACHINE_HEALTH_SUCCESS,
} from "../constants";

export const getMachines = () => (
    (dispatch: Function) => {
        dispatch(getMachinesRequest());
        return getMachinesAPI()
            .then((machines) => {
                dispatch(getMachinesSuccess(machines));
            })
            .catch((err) => {
                dispatch(getMachinesError())
            });
    }
);

export const getMachinesRequest = () => (
    {
        type: GET_MACHINES_REQUEST,
        payload: { isLoading: true },
    }
);

export const getMachinesSuccess = (machines: object) => (
    {
        type: GET_MACHINES_SUCCESS,
        payload: { machines },
    }
);

export const getMachinesError = () => (
    {
        type: GET_MACHINES_ERROR,
    }
);

export const getMachinesAPI = () => {
    return new Promise((resolve, reject) => {
        API().get(`/machines`)
            .then(res => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

// get machine latest health

export const getMachineHealth = (id) => (
    (dispatch: Function) => {
        dispatch(getMachineHealthRequest());
        return getMachineHealthAPI(id)
            .then((machine_health) => {
                dispatch(getMachineHealthSuccess(machine_health));
            })
            .catch((err) => {
                dispatch(getMachineHealthError())
            });
    }
);

export const getMachineHealthRequest = () => (
    {
        type: GET_MACHINE_HEALTH_REQUEST,
        payload: { isLoading: true },
    }
);

export const getMachineHealthSuccess = (machine_health: object) => (
    {
        type: GET_MACHINE_HEALTH_SUCCESS,
        payload: { machine_health },
    }
);

export const getMachineHealthError = () => (
    {
        type: GET_MACHINE_HEALTH_ERROR,
    }
);

export const getMachineHealthAPI = (id) => {
    console.log(id)
    return new Promise((resolve, reject) => {
        API().get(`${id}`)
            .then(res => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err);
            });
    });
};
