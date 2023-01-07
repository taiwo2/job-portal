const initiate = {
  jobs: []
}

export const jobReducers = (state=initiate,action) => {
  switch (action.type) {
    case "GET_ALL_JOBS":
      return {
        ...state,
        jobs: action.payload
      }
  
    default:
      return state;
  }
} 