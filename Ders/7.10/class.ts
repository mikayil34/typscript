class Ev {
    private _odasayisi: number;//sadece ilgili classdan ulaşılır
    protected _penceresayisi: number;//sadece ilgili classdan ulaşılılır ayrıca inherit verilen classdanda ulaşılır.
    public _kat: number;//herkese açık
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

