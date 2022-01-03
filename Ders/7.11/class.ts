class kisi {
    private _isim: string;
    get isim(): string {
        return "sayın : "+ this._isim;
    }
    set isim(ad: string) {
        this._isim = ad
    }
    kaydet() {
        console.log("Kişi Kaldedelidi.")
    }
}

class musteri extends kisi {
    satisYap() {
        console.log("Satış yapıldı.")
    }
}

class personel extends kisi {
    maasOde() {
        console.log("maaş ödendi")
    }
}

let müsteri = new musteri();
müsteri.isim="Engin"
müsteri.kaydet();
müsteri.satisYap();
console.log(müsteri.isim)
let p = new personel();
p.kaydet();
p.maasOde();
