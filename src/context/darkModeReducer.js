export const DarkModeReducer = (state,action) => {
  switch (action.type) {
    case "LIGHT":
      return {
        ...state,
        darkMode: false,
      
    }
    case "DARK": 
      return {
        ...state,
        darkMode: true,
      }
    case "TOGGLE":
      return {
        ...state,
        darkMode: !state.darkMode,
      }
    default:
      return state;
  }
}