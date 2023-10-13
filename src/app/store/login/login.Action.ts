import { createAction, props } from "@ngrx/store"

export const LOGGED_IN='[Logged In] Page'
export const LOGGED_IN_SUCCESS='[Logged In Success] success '
export const LOGGED_IN_FAILLED='[logged In Failed]'

export const LoggedIn = createAction(LOGGED_IN,props<{inputdata:any}>());
export const loggedInSuccess = createAction(LOGGED_IN_SUCCESS,props<{inputedata:any}>());
export const loggedInFailled = createAction(LOGGED_IN_FAILLED,props<{error:string}>());


