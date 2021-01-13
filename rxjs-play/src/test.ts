import { from, Observable, of, timer } from "rxjs";

import { tap, map, mergeMap } from 'rxjs/operators';


const  source$ = from([1, 2, 3, 4, 5]);


source$.pipe(
    mergeMap(val=>{
        return get(val);
    }),
)
.subscribe(value =>{
    console.log(value)
},null,()=>{
    console.log('completed')
})


function get (val): Observable<any>{
    console.log(val);
    return timer(1000);
}


// get().pipe(
//     tap(()=>{
//         console.log('tap')
//     })
// ).subscribe((val)=>{
//     console.log(val);
// })