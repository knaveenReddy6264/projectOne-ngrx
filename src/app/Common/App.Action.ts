import { createAction, props } from "@ngrx/store"

export const SHOW_ALERT='["app"]show alert'
export const Empty_Action='["app"]empty'


export const showAlert = createAction(SHOW_ALERT,props<{message:any,messagetype:any}>());
export const emptyAction= createAction(Empty_Action,props<{message:string}>)