const loggedReducer = (state = false, action) => {
  /* initial logged in state is false */
  switch(action.type){
      case "SIGN_IN":
          return !state;
      default:
          return state;
  }
};

export default loggedReducer;