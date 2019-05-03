// 接口

// function printLabel(labeledObj: { label: string }) {
//     console.log(labeledObj.label);
// }

// let myObj = {size: 10, label: 'Size 10 Object'};
// printLabel(myObj);



// interface LabeledValue {
//     label: string;
// }

// function printLabel(labeledObj: LabeledValue) {
//     console.log(labeledObj.label);
// }

// let myObj = {size: 10, label: "Size 10 Object"};
// printLabel(myObj);


// 可选属性

// interface SquareConfig {
//     color?: string;
//     width?: number;
// }

// function createSquare(config: SquareConfig): {color: string; area: number} {
//     let newSquare = {color: "white", area: 100};
//     if (config.color) {
//         newSquare.color = config.color;
//     }
//     if (config.width) {
//         newSquare.area = config.width * config.width;
//     }
//     return newSquare;
// }

// let mySquare = createSquare({width: 20});

// console.log(mySquare);


// interface Point {
//     readonly x: number;
//     readonly y: number;
// }

// let p1: Point = { x: 10, y: 20 };
// // p1.x = 5; // error!


// let a: number[] = [1, 2, 3, 4];
// let ro: ReadonlyArray<number> = a;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!

// interface SquareConfig {
//     color?: string;
//     width?: number;
// }

// function createSquare(config: SquareConfig): { color: string; area: number } {
   
// }

// let mySquare = createSquare({ color: "red", width: 100 });


// interface SearchFunc {
//     (source: string, subString: string): boolean;
// }

// let mySearch: SearchFunc = function(src: string, subString: string) {
//     let result = src.search(subString);
//     return result > -1;
// }


interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick(): void;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);