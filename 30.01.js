// ??
// თუ მნიშვნელობა არ არის null/undefined, მაშინ სრულდება
// მეორე პირობა. (აბრუნებს პირველ განსაზღვრულ პირობას)

// ||
// თუ მნიშვნეობა არის false, 0, "" (ცარიელი სტრინგი) null/undefined,
//     მაშინ სრულდება მეორე პირობა. (აბრუნებს პირველ ნამდვილ მნიშვნელობას).

// let user;
//
// console.log(user ?? "Anonymous");

// let user;
// user = null;
// console.log(user ?? "Anonymous");

// let user;
// user = "dato";
// console.log(user ?? "Anonymous");

// let user;
// user = "dato";
// console.log(user || "Anonymous");

// let user;
// user = null;
// console.log(user || "Anonymous");

// let firstName = 1;
// let lastName = null;
// let nickName = "Supercoder";
//
// // shows the first defined value:
// console.log(firstName ?? lastName ?? nickName ?? "Anonymous");

// let firstName = "dato";
// let lastName = null;
// let nickName = "Supercoder";
//
// // shows the first defined value:
// console.log(firstName || lastName || nickName || "Anonymous");

// let height = 0;
//
// console.log(height || 100);
// console.log(height ?? 100);

// let height = 1;
//
// console.log(height || 100);
// console.log(height ?? 100);

// let height = null;
//
// console.log(height || 100);
// console.log(height ?? 100);

// let height = 0;
// let width = null;
//
//
// let area = (height ?? 100) * (width ?? 50);
//
// console.log(area);
// let height = 5;
// let width = null;
//
//
// let area = (height ?? 100) * (width ?? 50);
//
// console.log(area);

// let height = 0;
// let width = 10;
//
//
// let area = (height || 100) * (width ?? 50);
//
// console.log(area);

// let height = 3;
// let width = 0;
//
//
// let area = (height || 100) * (width || 50);
//
// console.log(area);

// let firstName = "dato";
// let lastName = null;
// let nickName = "Supercoder";
//
// console.log(firstName && lastName || nickName || "Anonymous");

// let x = (0 && 2) ?? 3;
//
// console.log(x);

// let x = (0 && 2) || 3;
//
// console.log(x);
// let height;
// height = height || 0;
// console.log(height)

// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
//
// let counter = 0;
// while (counter < 8) {
//     console.log("Hello davit")
//
// counter ++;}

// let counter = 5;
// while (counter < 8) {
//     console.log("იტერაცია")
//
//     counter ++;}

// let counter = 5;
// while (counter > -5) {
//     console.log("იტერაცია")
//     console.log(counter);
//     counter --;}

// let counter = 0;
// while (counter < 8) {
//     console.log("Hello davit")
// console.log(counter)
//
// counter ++;}
//
// let i = 3;
// while (i) console.log(i--);
// console.log(i)

// let i = 0;
// while (i>-1) {i++;
// console.log(i)}
//
// let i = 5;
// do {
//     console.log("hello")
//     console.log( i );
//     i++;
// } while (i < 9);

// let i = 60;
// do {
//     console.log( i );  console.log("hello")
//
//
//     i++;
// } while (i < 9);

// for (let i = 0; i < 3; i--) {
//     console.log(i);
// }
//
// for (let i = 0; i < 50; i=i+5) {
//     console.log(i);
// }
//
// let sum = 0;
//
// while (true) {
//
//     let value = +prompt("Enter a number", '');
//
//     if (!value) break;
//
//     sum += value;
//
// }
// console.log( 'Sum: ' + sum );

for (let i = 0; i < 10; i++) {


    if (i % 2 == 0) continue;

    console.log(i);
}
add