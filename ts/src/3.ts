// 3.1 函数的定义


// function run ():string {
//   return "run funtion";
// }

// console.log(run());

// let fn2:any = function():number {
//     return 124;
// };

// console.log(fn2());

// function getInfo(name:string,age:number):string{
//     return `name:${name}  --- age:${age}`;
// }

// console.log(getInfo('tom',23));


// function getInfo(name?:string,age?:number):string{
//     if(age){
//         return `name:${name}  --- age:${age}`;
//     }else{
//         age = 23;
//         return `name:${name}  --- age:${age}`;
//     }
// }


// console.log(getInfo('tom'));


function sum (...args:number[]):number{

    console.dir(args);
    
    let res =0;
    
    return res;
}

sum(1,2,3,4);


// 重载








