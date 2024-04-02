"use Server"
// server action module
// get initial 10 data from server
export async function getProducts() {
    const res = await fetch(`https://fakestoreapi.com/products?limit=10`)
    const data = await res.json()
    return data

}
// get every next one data from server;
let count = 11;
export async function getNextProduct() {
    console.log(`next product server ${count}`);
    if (count > 20){
        count=11;
    }
    const res = await fetch(`https://fakestoreapi.com/products/${count}`);
    count++;
    const newProduct = await res.json();
    return newProduct;
}
