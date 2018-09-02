var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.add = function (point) {
        return new Point(this.x + point.x, this.y + point.y);
    };
    return Point;
}());
var p1 = new Point(0, 10);
var p2 = new Point(10, 20);
var p3 = p1.add(p2);
console.log(p3);
var funcs = [];
for (var i = 0; i < 3; i++) {
    funcs.push(function () {
        console.log(i);
    });
}
for (var j = 0; j < 3; j++) {
    funcs[j]();
}
