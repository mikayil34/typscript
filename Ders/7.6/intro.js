function topla(x, y) {
    return x + y;
}
function topla2(x, y) {
    return x + y;
}
var topla3 = function (x, y) {
    return x + y;
};
console.log(topla(2, 3));
console.log(topla("ankara", 2));
var topla4 = function (x, y) {
    if (y === void 0) { y = 3; }
    return x + y;
};
console.log(topla4(2));
var topla5 = function (x, y) {
    if (y) {
        return x + y;
    }
    return x;
};
console.log(topla5(2));
