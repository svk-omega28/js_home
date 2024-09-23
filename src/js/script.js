'use strict';

const ladder = {
  step: 0,
  up() {
    this.step++;
    return this; // повертаємо об'єкт для ланцюжка
  },
  down() {
    this.step--;
    return this; // повертаємо об'єкт для ланцюжка
  },
  showStep() {
    alert(this.step);
    return this; // повертаємо об'єкт для ланцюжка
  },
};

ladder
  .up()
  .up()
  .down()
  .showStep() // 1
  .down()
  .showStep(); // 0
