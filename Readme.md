### Описание домашнего задания


<h2>Це ladder (сходи) – об'єкт, який дозволяє підніматися вгору та спускатися: </h2>


```
let ladder = {
step: 0,
up: function () {
this.step++;
},
down: function () {
this.step--;
},
showStep: function () { // показывает текущую ступеньку
alert(this.step);
}
};
```
<h2>Тепер, якщо нам потрібно зробити кілька послідовних викликів, ми можемо виконати це так:</h2>

```
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
```
<h2>Змініть код методів up, down і showStep таким Таким чином, щоб їх виклик можна було зробити по ланцюжку, наприклад:</h2>

```
ladder.up().up().down().showStep(); // 1
```
<h2>Такий підхід широко використовується в бібліотеках JavaScript.</h2>
