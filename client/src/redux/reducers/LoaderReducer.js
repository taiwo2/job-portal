const initate = {
  loading: false
}

export const loaderReducer = (state=initate,action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: action.payload
      }
    default:
      return state;
  }
}