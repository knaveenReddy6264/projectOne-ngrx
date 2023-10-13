import { createReducer, on } from "@ngrx/store"
import { loggedInFailled, loggedInSuccess } from "./login.Action"

export const logInState:any={
   message:''
}
 const _loggedInReducer = createReducer(logInState,
    on(loggedInSuccess,(state,action)=>{
        console.log(state,"10::Reducer",action,"dd:::",)
        return {
            ...state,
            message:action.inputedata.message
        }
    }),
    on(loggedInFailled,(state,action)=>{
        return {
            ...state,
            error:[...action.error]
        }
    })
    )

export function logInReducer(state:any,action:any){
return _loggedInReducer(state,action);
}