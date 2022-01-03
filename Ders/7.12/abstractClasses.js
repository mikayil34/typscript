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
var KrediBase = /** @class */ (function () {
    function KrediBase() {
    }
    KrediBase.prototype.kaydet = function () {
        console.log("Kaydedildi.");
    };
    return KrediBase;
}());
var TüketiciKredi = /** @class */ (function (_super) {
    __extends(TüketiciKredi, _super);
    function TüketiciKredi() {
        return _super.call(this) || this;
    }
    TüketiciKredi.prototype.hesapla = function () {
        console.log("Tüketici Kredisine göre hesap yapıldı.");
    };
    return TüketiciKredi;
}(KrediBase));
var MorgicKredi = /** @class */ (function (_super) {
    __extends(MorgicKredi, _super);
    function MorgicKredi() {
        return _super.call(this) || this;
    }
    MorgicKredi.prototype.hesapla = function () {
        console.log("Konut Kredisine göre hesap yapıldı.");
    };
    return MorgicKredi;
}(KrediBase));
var tüketicikredi = new TüketiciKredi();
tüketicikredi.hesapla();
tüketicikredi.kaydet();
var morgickredi = new MorgicKredi();
morgickredi.hesapla();
morgickredi.kaydet();
