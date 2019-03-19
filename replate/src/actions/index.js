import axios from 'axios';

export const REGISTER_START = 'REGISTER_START'
export const LOGIN_START = 'LOGIN_START';
export const GET_REQUESTS_START = 'GET_REQUESTS_START';
export const GET_REQUESTS_SUCCESS = 'GET_REQUESTS_SUCCESS';
export const GET_REQUESTS_FAILURE = 'GET_REQUESTS_FAILURE';
export const ADD_REQUEST_SUCCESS = 'ADD_REQUEST_SUCCESS';
export const ADD_REQUEST_FAILURE = 'ADD_REQUEST_FAILURE';
export const UPDATE_REQUEST_SUCCESS = 'UPDATE_REQUEST_SUCCESS';
export const UPDATE_REQUEST_FAILURE = 'UPDATE_REQUEST_FAILURE';
export const DELETE_REQUEST_SUCCESS = 'DELETE_REQUEST_SUCCESS';
export const DELETE_REQUEST_FAILURE = 'DELETE_REQUEST_FAILURE';

export const register = creds => dispatch => {
    dispatch ({ type: REGISTER_START });
    return axios.post('http://localhost:5000/api/register', creds)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    });
}

export const login = creds => dispatch => {
    dispatch ({ type: LOGIN_START });
    return axios.post('http://localhost:5000/api/login', creds).then(res => {
        localStorage.setItem('token', res.data.payload);
    });
};

export const getRequests = () => dispatch => {
    dispatch ({ types: GET_REQUESTS_START });

    axios
    .get('', {
        headers: { Authorization: localStorage.getItem('token') }
    })
    .then(res => {
        console.log (res);
        dispatch ({ type: GET_REQUESTS_SUCCESS, payload: res.data })
    })
    .catch(err => {
        dispatch ({ types: GET_REQUESTS_FAILURE, payload: err.response })
    });
};

export const addRequest = request => dispatch => {

    axios
    .post ('', request, {
        headers: { Authorization: localStorage.getItem('token') }
    })
    .then(res => {
        dispatch ({ type: ADD_REQUEST_SUCCESS, payload: res.data })
    })
    .catch(err => {
        dispatch ({ type: ADD_REQUEST_FAILURE, payload: err })
    });
};

export const deleteRequest = id => dispatch => {

    axios
    .delete(`${id}`, {
        headers: { Authorization: localStorage.getItem('token') }
    })
    .then(res => {
        dispatch ({ type: DELETE_REQUEST_SUCCESS, payload: res.data })
    })
    .catch(err => {
        dispatch ({ type: DELETE_REQUEST_FAILURE, payload: err })
    });
};

export const updateRequest = request => dispatch => {

    axios
    .put(`${request.id}`, request, {
        headers: { Authorization: localStorage.getItem('token') }
    })
    .then(res => {
        dispatch ({ type: UPDATE_REQUEST_SUCCESS, payload: res.data })
    })
    .catch(err => {
        dispatch ({ types: UPDATE_REQUEST_FAILURE, payload: err })
    });
};
