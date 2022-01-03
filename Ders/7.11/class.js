var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var kisi = /** @class */ (function () {
    function kisi() {
    }
    Object.defineProperty(kisi.prototype, "isim", {
        get: function () {
            return "sayın : " + this._isim;
        },
        set: function (ad) {
            this._isim = ad;
        },
        enumerable: false,
        configurable: true
    });
    kisi.prototype.kaydet = function () {
        console.log("Kişi Kaldedelidi.");
    };
    return kisi;
}());
var musteri = /** @class */ (function (_super) {
    __extends(musteri, _super);
    function musteri() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    musteri.prototype.satisYap = function () {
        console.log("Satış yapıldı.");
    };
    return musteri;
}(kisi));
var personel = /** @class */ (function (_super) {
    __extends(personel, _super);
    function personel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    personel.prototype.maasOde = function () {
        console.log("maaş ödendi");
    };
    return personel;
}(kisi));
var müsteri = new musteri();
müsteri.isim = "Engin";
müsteri.kaydet();
müsteri.satisYap();
console.log(müsteri.isim);
var p = new personel();
p.kaydet();
p.maasOde();
