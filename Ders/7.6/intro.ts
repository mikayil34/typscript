function topla(x, y) {
    return x + y
}

function topla2(x: number, y: number): number {
    return x + y
}

let topla3 = function (x: number, y: number): number {
    return x + y
}

console.log(topla(2, 3));
console.log(topla("ankara", 2));


let topla4 = function (x: number, y: number = 3): number {
    return x + y
}

console.log(topla4(2));

let topla5 = function (x: number, y?: number): number {
    if (y) {
        return x + y;
    }
    return x;
}

console.log(topla5(2));