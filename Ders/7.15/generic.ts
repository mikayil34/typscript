function deger(x: number): number {
    x += 20;
    return x;
}

let sayi = deger(10);
console.log(sayi);

function deger2(x: string): string {

    return x;
}

let sehir = deger2("antara");
console.log(sehir);

function deger3<T>(x: T): T {

    return x;
}
let sayi3 = deger3<string>("antara");
console.log(sayi3);