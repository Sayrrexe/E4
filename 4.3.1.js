function logOwnProperties(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`Ключ: ${key}, Значение: ${obj[key]}`);
        }
    }
}

const parentObj = { city: 'Москва', country: 'Россия' };
const childObj = Object.create(parentObj);
childObj.name = 'Иван';
childObj.age = 30;

logOwnProperties(childObj);
