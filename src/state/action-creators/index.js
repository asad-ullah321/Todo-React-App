export const newtodo = (object) => {
  return (dispatch) => {
    dispatch({ type: "addnewtodo", payload: object });
  };
};

export const del = (object) => {
  return (dispatch) => {
    dispatch({ type: "del", payload: object });
  };
};

export const update = (object, newvalues) => {
    return (dispatch) => {
      dispatch({ type: "updatedetails", payload: object, newpayload: newvalues });
    };
  };


export const chngtitle = (value) => {
  return (dispatch) => {
    dispatch({ type: "chngtitle", payload: value });
  };
};

export const chngdecription = (value) => {
  return (dispatch) => {
    dispatch({ type: "chngdecription", payload: value });
  };
};

export const uptitle = (value) => {
    return (dispatch) => {
      dispatch({ type: "uptitle", payload: value });
    };
  };
  
  export const updecription = (value) => {
    return (dispatch) => {
      dispatch({ type: "updecription", payload: value });
    };
  };

