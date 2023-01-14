 const initial = {
  users: []
 }

 export const usersReducer = (state = initial, action) => {

   switch (action.type) {
     case "GET_ALL_USERS":
       return {
        ...state,
         users: action.payload
       }
     default:
       return state;
   }
 }