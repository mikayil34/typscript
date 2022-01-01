function selamver(isim) {
    return "merhaba" + isim;
}
var mesaj = selamver('engin');
var sayi;
sayi = 10;
sayi = 10.2;
var sehir;
sehir = "Ankara";
sehir = "İstanbul";
var dogruMu;
dogruMu = true;
dogruMu = false;
var sayilar = [1, 2, 3];
var sayilar2 = [1, 2, 3];
var dizi = [2, "ankara"];
var dizisayi = dizi[0];
var dizimetin = dizi[1];
var Renk;
(function (Renk) {
    Renk[Renk["kirmizi"] = 1] = "kirmizi";
    Renk[Renk["siyah"] = 2] = "siyah";
    Renk[Renk["mavi"] = 3] = "mavi";
})(Renk || (Renk = {}));
var renk = Renk.kirmizi;
var deger = "Ankara";
deger = 2;
deger = [1, 2, 3];
deger = {};
var deger2 = undefined;
function selamver2() {
    console.log("Merhaba");
    return 4;
}
//undefined null
var yas;
yas = 10;
var müsteri = /** @class */ (function () {
    function müsteri() {
    }
    return müsteri;
}());
