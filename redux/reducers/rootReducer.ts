import { combineReducers } from "redux";
import { loaddingScreenReducer } from "./loadingScreenReducer";
import { currentUser, userRoleFunc, userRoleMenu } from "./userReducer";



export const rootReducer:any = combineReducers({
  loading_screen: loaddingScreenReducer,
  user:currentUser,
  user_menu: userRoleMenu,
  user_func: userRoleFunc,
});
