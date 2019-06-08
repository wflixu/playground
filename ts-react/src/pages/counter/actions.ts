import { action } from 'typesafe-actions';


// CLASSIC API
// export const increment = () => action(INCREMENT);
// export const add = (amount: number) => action(ADD, amount);

export const decrement = (amount:number)=>{
    return {
        type:'DECREMENT',
        // tslint:disable-next-line:object-literal-shorthand
        // tslint:disable-next-line:object-literal-sort-keys
        amount

    }
}
export const  increment =(amount:number)=>{
     return {
         type:'INCREMENT',
         // tslint:disable-next-line:object-literal-sort-keys
         amount
     }
}

// ALTERNATIVE API - allow to use reference to "action-creator" function instead of "type constant"
// e.g. case getType(increment): return { ... }
// This will allow to completely eliminate need for "constants" in your application, more info here:
// https://github.com/piotrwitek/typesafe-actions#behold-the-mighty-tutorial

// OPTION 1 (with generics):
// import { createStandardAction } from 'typesafe-actions';
// export const increment = createStandardAction(INCREMENT)<void>();
// export const add = createStandardAction(ADD)<number>();

// OPTION 2 (with resolve callback):
// import { createAction } from 'typesafe-actions';
// export const increment = createAction(INCREMENT);
// export const add = createAction(ADD, resolve => {
//   return (amount: number) => resolve(amount);
// });
