class Ev {
    _odasayisi: number;
    _penceresayisi: number;
    _kat: number;
    constructor(odasayisi: number, penceresayisi: number, kat: number) {
        this._odasayisi = odasayisi;
        this._kat = kat;
        this._penceresayisi = penceresayisi;
    }
    YemekYe() {
        console.log(this._kat + "katlı evde" + this._odasayisi + " odada" + this._penceresayisi + "perceresi olan evde " + "Yemek yiyildi")
    }
}
let ev = new Ev(3, 4, 5)
ev.YemekYe();

