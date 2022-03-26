abstract class KrediBase {
    constructor() {

    }
    kaydet(): void {
        console.log("Kaydedildi.")
    }
    abstract hesapla(): void
deger:number=12
}

class TüketiciKredi extends KrediBase {
    constructor( ) {
        super();

    }
    hesapla(): void {
      console.log("Tüketici Kredisine göre hesap yapıldı.")
    }
}

class MorgicKredi extends KrediBase {
    constructor( ) {
        super();

    }
    hesapla(): void {
      console.log("Konut Kredisine göre hesap yapıldı.")
    }
}

let tüketicikredi= new TüketiciKredi();
tüketicikredi.hesapla();
tüketicikredi.kaydet();
tüketicikredi.deger;
let morgickredi= new MorgicKredi();
morgickredi.hesapla();
morgickredi.kaydet();
morgickredi.deger;
let kredi:KrediBase
kredi = new TüketiciKredi();
kredi = new MorgicKredi(); 