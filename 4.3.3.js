function createEmptyObject() {
    return Object.create(null);
}


const emptyObj = createEmptyObject();

console.log(emptyObj); 
console.log(Object.getPrototypeOf(emptyObj)); 
console.log(emptyObj.toString); 
