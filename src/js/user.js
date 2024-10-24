'use strict';

const User = (() => {
  let _name = '';
  let _age = 0;

  return class {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    get name() {
      return _name;
    }

    set name(newName) {
      _name = newName;
    }

    get age() {
      return _age;
    }

    set age(newAge) {
      if (typeof newAge === 'number' && newAge >= 1 && newAge <= 100) {
        _age = newAge;
      } else {
        console.error('возраст должен быть числом от 1 до 100');
      }
    }
  };
})();
export default User;
