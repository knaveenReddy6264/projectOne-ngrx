import { createFeatureSelector, createSelector } from "@ngrx/store";

const getloggedInState = createFeatureSelector<any>('logInPage');

export const loggedInSelector = createSelector(getloggedInState,(state)=>{
    console.log(state,"6666::selector")
    return state.message;
})