abstract class KrediBase {
    constructor() {

    }
    kaydet(): void {
        console.log("Kaydedildi.")
    }
    abstract hesapla(): void

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
let morgickredi= new MorgicKredi();
morgickredi.hesapla();
morgickredi.kaydet();

let kredi:KrediBase
kredi = new TüketiciKredi();
kredi = new MorgicKredi();