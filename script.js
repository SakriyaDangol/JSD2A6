const inventoryData = {
    mask: {
        price: 20,
        quantity: 999
    },

    sanitizer: {
        price: 100,
        quantity: 500
    },

    paracetamol: {
        price: 50,
        quantity: 900
    }
}



const maskQuantity = 10;
const sanitizerQuantity = 65;
const paracetamolQuantity = 20;

console.log(inventoryData)

const rameshBill = inventoryData.mask.price * maskQuantity + inventoryData.sanitizer.price * sanitizerQuantity + inventoryData.paracetamol.price * paracetamolQuantity;

console.log('ramesh bill' + '=' + rameshBill);

inventoryData.mask.quantity = inventoryData.mask.quantity - maskQuantity;
inventoryData.sanitizer.quantity = inventoryData.sanitizer.quantity - sanitizerQuantity;
inventoryData.paracetamol.quantity = inventoryData.paracetamol.quantity - paracetamolQuantity;

console.log(inventoryData)