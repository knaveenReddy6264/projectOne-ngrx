import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { LoginserviceService } from "src/app/service/loginservice.service";
import { LoggedIn, loggedInFailled, loggedInSuccess } from "./login.Action";
import { catchError, exhaustMap, map, of, switchMap } from "rxjs";
import { showAlert } from "src/app/Common/App.Action";

@Injectable()

export class loggedInEffects {

    constructor(private action$: Actions, private loginService: LoginserviceService) { }

_loggedIn= createEffect(()=>
          this.action$.pipe(ofType(LoggedIn),
        switchMap((action => {
            console.log(action,"17::A")
            return this.loginService.userLogin(action).pipe(
                switchMap((data) => {
                    return of(loggedInSuccess({inputedata:data }),
                    showAlert({message:"Success",messagetype:"success"}))
                }),
                catchError((_error)=>of(showAlert({message:"failed to login",messagetype:'error'})))
            );
        }))
    )
)

}