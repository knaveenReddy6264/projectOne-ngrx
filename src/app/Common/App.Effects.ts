import {Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { emptyAction, showAlert } from './App.Action'
import { exhaustMap, map } from 'rxjs'
import { MatSnackBar } from '@angular/material/snack-bar'


@Injectable()

export class AppEffect{
    constructor(private action$: Actions,private snackBar:MatSnackBar) { }


_showAlert= createEffect(()=>
     this.action$.pipe(
        ofType(showAlert),
        exhaustMap((action) => {
            console.log(action,"18 error...")
            return this.showsnakbarAlert(action.message,action.messagetype).afterDismissed().pipe(
                map(() => {
                    return emptyAction()
                })
            )
        })
    )
)


showsnakbarAlert(message:string,type:string){
    console.log(message,"30::",type)
    let _class = type =='error' ? 'red-snackbar' : 'green-snackbar'
return this.snackBar.open(message,'ok',{
verticalPosition:'top',
horizontalPosition:'end',
duration:5000,
panelClass:[_class]
})
}


}