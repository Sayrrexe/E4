function hasProperty(propertyName, obj) {
    return obj.hasOwnProperty(propertyName);
}

// Пример использования:
const exampleObj = {
    name: 'alex',
    age: 25,
    isDeveloper: true
};

console.log(hasProperty('name', exampleObj)); // true
console.log(hasProperty('hobby', exampleObj)); // false
