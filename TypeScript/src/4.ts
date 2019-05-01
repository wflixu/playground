import { log } from "util";

// function Person(name:string){
//     this.name = name;
//     this.run = function(){
//         console.log(`${this.name} is running`);
        
//     }
// }


// var p = new Person('zhangs');
// p.run();


class Person {
    name:string;
    constructor(name:string){
        this.name = name;
    }
    run():void{
        console.log(`${this.name} is running`);
        
    }
    getName():string{
        return this.name;
    }
    setName(name:string):void{
        this.name = name;
    }


}

let p = new Person('cholos');
p.run();

