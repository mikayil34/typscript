interface Product {
    id: number;
    name: string;
    unitPrice: number
}

class Product2 {
    id: number;
    name: string;
    unitPrice: number; 
}

function save(product: Product) {
    console.log(product.name + " Kaydedildi");
    console.log(product.unitPrice + " Fiyatı");
}

save({ id: 1, name: "leptap", unitPrice: 12 });
function save2(product: Product2) {
    console.log(product.name + " Kaydedildi");
    console.log(product.unitPrice + " Fiyatı");
}
let mause= new Product2();
mause.name="Atech"
save2(mause);  
interface PersonService {
    save(); 
}
class costumerSrevice implements PersonService{
    save() {
       
    } 
}