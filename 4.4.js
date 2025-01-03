// Родительская функция-конструктор
function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

// Методы для включения/выключения
ElectricalAppliance.prototype.on = function () {
    this.isPlugged = true;
    console.log(`${this.name} включено.`);
};

ElectricalAppliance.prototype.off = function () {
    this.isPlugged = false;
    console.log(`${this.name} выключено.`);
};

// Настольная лампа
function DeskLamp(name, power, brightness) {
    ElectricalAppliance.call(this, name, power);
    this.brightness = brightness;
}

DeskLamp.prototype = Object.create(ElectricalAppliance.prototype);

DeskLamp.prototype.BrightnessUp = function (brightness) {
    this.brightness = brightness;
    console.log(`Яркость лампы установлена на: ${brightness}`);
};

// Компьютер
function Computer(name, power, type) {
    ElectricalAppliance.call(this, name, power);
    this.type = type;
}

Computer.prototype = Object.create(ElectricalAppliance.prototype);

Computer.prototype.runProgram = function (programName) {
    console.log(`${this.name} запускает программу: ${programName}.`);
};

const deskLamp = new DeskLamp('Настольная лампа', 40, 'Средняя');
const computer = new Computer('Компьютер', 150, 'Настольный');

deskLamp.on();
deskLamp.BrightnessUp('Тусклая');
computer.on();
computer.runProgram('Visual Studio Code');

console.log('Вычисление общей потребляемой мощности...');
const appliances = [deskLamp, computer];
const totalPower = appliances.reduce((total, appliance) => {
    return appliance.isPlugged ? total + appliance.power : total;
}, 0);

console.log(`Общая мощность: ${totalPower} Вт`);
