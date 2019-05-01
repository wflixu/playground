class Point {
    x:number;
    y:number;
    constructor(x:number,y:number) {
        this.x=x;
        this.y=y;
    }
    add (point:Point):any {
        return new Point(this.x+point.x,this.y+point.y);
    }
}
var p1:Point=new Point(0,10);
var p2: Point = new Point(10,20);
var p3:Point = p1.add(p2);
console.log(p3);
