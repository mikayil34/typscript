class kisi{
kaydet(){
    console.log("Kişi Kaldedelidi.")
}
}

class musteri extends kisi{
    satisYap(){
        console.log("Satış yapıldı.")
    }
}

class personel extends kisi{
    maasOde(){
        console.log("maaş ödendi")
    }
}

let müsteri= new musteri();
müsteri.kaydet();
müsteri.satisYap();
let p= new personel();
p.kaydet();
p.maasOde();
