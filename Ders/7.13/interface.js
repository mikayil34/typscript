var Product2 = /** @class */ (function () {
    function Product2() {
    }
    return Product2;
}());
function save(product) {
    console.log(product.name + " Kaydedildi");
    console.log(product.unitPrice + " Fiyatı");
}
save({ id: 1, name: "leptap", unitPrice: 12 });
function save2(product) {
    console.log(product.name + " Kaydedildi");
    console.log(product.unitPrice + " Fiyatı");
}
var mause = new Product2();
mause.name = "Atech";
save2(mause);
