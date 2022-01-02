var Ev = /** @class */ (function () {
    function Ev(odasayisi, penceresayisi, kat) {
        this._odasayisi = odasayisi;
        this._kat = kat;
        this._penceresayisi = penceresayisi;
    }
    Ev.prototype.YemekYe = function () {
        console.log(this._kat + "katlı evde" + this._odasayisi + " odada" + this._penceresayisi + "perceresi olan evde " + "Yemek yiyildi");
    };
    return Ev;
}());
var ev = new Ev(3, 4, 5);
ev.YemekYe();
