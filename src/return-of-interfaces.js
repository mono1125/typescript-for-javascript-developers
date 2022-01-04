"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Mahotsukai {
}
class Souryo {
}
class Taro extends Mahotsukai {
}
class Jiro {
    ionazun() {
        console.log('iozazun');
    }
    kougeki() {
        console.log('kougeki');
    }
}
const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
