// let age = 100;
// let age2 = age;
// console.log(age, age2);
// age = 200;
// console.log(age, age2);

const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

const team = players;

console.log(players, team);

const team2 = players.slice();
console.log(team2);

const person = {
    name: 'diehl',
    age: 23
};

const cap2 = Object.assign({}, person, {number: 99, age: 12});

console.log(cap2);
