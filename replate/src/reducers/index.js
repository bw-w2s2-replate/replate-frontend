import {
  GET_USERS_START,
  LOGIN_START,
  REGISTER_START,
  GET_REQUESTS_START,
  GET_REQUESTS_SUCCESS,
  GET_REQUESTS_FAILURE,
  ADD_REQUEST_SUCCESS,
  ADD_REQUEST_FAILURE,
  UPDATE_REQUEST_SUCCESS,
  UPDATE_REQUEST_FAILURE,
  DELETE_REQUEST_SUCCESS,
  DELETE_REQUEST_FAILURE
} from "../actions";

const initialState = {
  requests: [],
  users: [],
  activeRequest: null,
  error: null,
  registering: false,
  gettingUsers: false,
  loggingIn: false,
  fetchingRequests: false,
  addingRequest: false,
  updatingRequest: false,
  deletingRequest: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_START: {
      return {
        ...state,
        gettingUsers: true
      };
    }
    case LOGIN_START: {
      return {
        ...state,
        loggingIn: true
      };
    }
    case REGISTER_START: {
      return {
        ...state,
        registering: true
      };
    }
    case GET_REQUESTS_START: {
      return {
        ...state,
        error: "",
        fetchingRequests: true
      };
    }
    case GET_REQUESTS_SUCCESS: {
      return {
        ...state,
        error: "",
        fetchingRequests: false,
        requests: action.payload
      };
    }
    case GET_REQUESTS_FAILURE: {
      return {
        ...state,
        error: "",
        fetchingRequests: false
      };
    }
    case ADD_REQUEST_SUCCESS: {
      return {
        ...state,
        error: "",
        addingRequest: true
        // requests: action.payload
      };
    }
    case ADD_REQUEST_FAILURE: {
      return {
        ...state,
        error: "",
        addingRequest: false
      };
    }
    case UPDATE_REQUEST_SUCCESS: {
      return {
        ...state,
        error: "",
        updatingRequest: true
      };
    }
    case UPDATE_REQUEST_FAILURE: {
      return {
        ...state,
        error: "",
        updatingRequest: false
      };
    }
    case DELETE_REQUEST_SUCCESS: {
      return {
        ...state,
        error: "",
        deletingRequest: true
      };
    }
    case DELETE_REQUEST_FAILURE: {
      return {
        ...state,
        error: action.payload,
        deletingRequest: false
      };
    }
    default:
      return state;
  }
};

export default reducer;
