// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total);
// const diff = Math.abs(apples - grapes);
// console.log(diff)


// let students = 100;
// students += 50;
// console.log(students);

// let x = 0;
// console.log(x);
// console.log(++x);

// const result = 108 + 223 - 2 * 5;
// console.log(result);

// const value = 27.5;
// console.log(Math.floor(value));
// console.log(Math.ceil(value));
// console.log(Math.round(value));

// const companyName = `Cyberdyne system`;
// const repairBots = 150;
// const defenceBots = 50;
// const message = `Cyberdyne system has ${repairBots + defenceBots} bots in stock`;
// console.log(message);

// let weight = `88.3`;
// let height = `1.75`;

// const bmi = Number.parseFloat(weight) / Number.parseFloat(Math.pow(height , 2));
//     console.log(bmi.toFixed(1));

// let x = 2;
// let y = 8;
// let z = 0;

// console.log(y &&  x > 4 ? `hurray` : `ops`);

// const incomingValue = 5;
// const defaultValue = 10;
// const outcomingValue = 15;
// // ---- запинаеться на лжи && ------- //
// const value = false && NaN && 23;
// console.log(value); // false

// // ---- запинаеться на правде || ------- //
// const result = false || NaN || 23;
// console.log(result); // 23

const totalMinutes = 70;


// ------- % это остаток от деления ------ //
const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
console.log(hours);
console.log(minutes);
console.log(30 % 8);

const min = 20;

console.log(`min:`, min.toString().padStart(2, `0`));