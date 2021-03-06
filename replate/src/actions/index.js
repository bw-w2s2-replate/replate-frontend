import axios from "axios";

export const REGISTER_START = "REGISTER_START";
export const LOGIN_START = "LOGIN_START";
export const GET_USERS_START = "GET_USERS_START";
export const GET_REQUESTS_START = "GET_REQUESTS_START";
export const GET_REQUESTS_SUCCESS = "GET_REQUESTS_SUCCESS";
export const GET_REQUESTS_FAILURE = "GET_REQUESTS_FAILURE";
export const ADD_REQUEST_SUCCESS = "ADD_REQUEST_SUCCESS";
export const ADD_REQUEST_FAILURE = "ADD_REQUEST_FAILURE";
export const UPDATE_REQUEST_SUCCESS = "UPDATE_REQUEST_SUCCESS";
export const UPDATE_REQUEST_FAILURE = "UPDATE_REQUEST_FAILURE";
export const DELETE_REQUEST_SUCCESS = "DELETE_REQUEST_SUCCESS";
export const DELETE_REQUEST_FAILURE = "DELETE_REQUEST_FAILURE";

const apiBaseUrl =
  process.env.NODE_ENV === "production"
    ? "https://bw2s2-replate.herokuapp.com"
    : "http://localhost:5000";

export const register = creds => dispatch => {
  dispatch({ type: REGISTER_START });
  return axios
    .post(apiBaseUrl + "/api/register", creds)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios.post(apiBaseUrl + "/api/login", creds).then(res => {
    localStorage.setItem("token", res.data.payload);
  });
};

export const getUsers = () => dispatch => {
  dispatch({ type: GET_USERS_START });
  axios
    .get(apiBaseUrl + "/api/users/all")
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};

export const getRequests = () => dispatch => {
  dispatch({ type: GET_REQUESTS_START });

  axios
    .get(apiBaseUrl + "/api/requests/all", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      console.log(res);
      dispatch({ type: GET_REQUESTS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_REQUESTS_FAILURE, payload: err.response });
    });
};

export const addRequest = request => dispatch => {
  const foodExp = request.food_expiration;
  request.food_expiration = new Date(foodExp);
  // console.log('new request: ', request);
  axios
    .post(apiBaseUrl + "/api/requests/create", request, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      console.log(res);
      dispatch({ type: ADD_REQUEST_SUCCESS, payload: res.data.Data });
      // dispatch({ type: ADD_REQUEST_SUCCESS });
    })
    .catch(err => {
      dispatch({ type: ADD_REQUEST_FAILURE, payload: err });
    });
};

export const deleteRequest = id => dispatch => {
  axios
    .delete(apiBaseUrl + `/api/requests/${id}`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      dispatch({ type: DELETE_REQUEST_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: DELETE_REQUEST_FAILURE, payload: err });
    });
};

export const updateRequest = request => dispatch => {
  axios
    .put(apiBaseUrl + `/api/requests/${request.id}`, request, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      console.log(res);
      // dispatch({ type: UPDATE_REQUEST_SUCCESS, payload: res.data });
      dispatch({ type: UPDATE_REQUEST_SUCCESS });
    })
    .catch(err => {
      dispatch({ type: UPDATE_REQUEST_FAILURE, payload: err });
    });
};
