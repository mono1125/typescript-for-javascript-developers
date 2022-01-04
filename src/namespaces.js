"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Japanese;
(function (Japanese) {
    let Tokyo;
    (function (Tokyo) {
        class Person {
            constructor(name) {
                this.name = name;
            }
        }
        Tokyo.Person = Person;
    })(Tokyo = Japanese.Tokyo || (Japanese.Tokyo = {}));
    let Osaka;
    (function (Osaka) {
        class Person {
            constructor(name) {
                this.name = name;
            }
        }
        Osaka.Person = Person;
    })(Osaka = Japanese.Osaka || (Japanese.Osaka = {}));
})(Japanese || (Japanese = {}));
var English;
(function (English) {
    class Person {
        constructor(firstName, middleName, lastName) {
            this.firstName = firstName;
            this.middleName = middleName;
            this.lastName = lastName;
        }
    }
    English.Person = Person;
})(English || (English = {}));
const me = new Japanese.Tokyo.Person('はむさん');
console.log(me.name);
const meOsaka = new Japanese.Osaka.Person('はむやん');
console.log(meOsaka.name);
const michael = new English.Person('Michael', 'Joseph', 'Jackson');
console.log(michael);
