class ElectricalAppliance {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }

    on() {
        this.isPlugged = true;
        console.log(`${this.name} Включено.`);
    }

    off() {
        this.isPlugged = false;
        console.log(`${this.name} Выключено.`);
    }
}

class DeskLamp extends ElectricalAppliance {
    constructor(name, power, brightness) {
        super(name, power);
        this.brightness = brightness
    }

    BrightnessUp(brightness){
        this.brightness = brightness
        console.log(`Яркость установленна на ${brightness}`);
    }
}

class Computer extends ElectricalAppliance {
    constructor(name, power, type) {
        super(name, power);
        this.type = type;
    }

    runProgram(programName) {
        console.log(`${this.name} в компьютере запущена программа: ${programName}.`);
    }
}

const deskLamp = new DeskLamp('Настольная лампа', 40, 'Ярко');
const computer = new Computer('Компьютер', 150, 'ноутбук');

// Работа с экземплярами
deskLamp.on();
deskLamp.BrightnessUp('Тускло');
computer.on();
computer.runProgram('Visual Studio Code');

// Вычисление общей потребляемой мощности
console.log('вычисление общей мощности...');
const appliances = [deskLamp, computer];
const totalPower = appliances.reduce((total, appliance) => {
    return appliance.isPlugged ? total + appliance.power : total;
}, 0);

console.log(totalPower);

