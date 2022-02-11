/*
####################
      lev1_1
####################
*/

// Schreibe die Intro-Funktion und gib bitte nur Hello World in der Konsole aus.
function intro() {
  console.log("Hello World");
}

intro();

// Ändere die Intro-Funktion auf die Arrow-Funktion.
intro = () => {
  console.log("Hello World");
}

intro();

// Verkürze die Arrow Funktion.
intro = () => console.log("Hello World");

intro();

/*
####################
      lev1_2
####################
*/

// Schreibe eine Funktion, die "Hallo" in deinem Browser (console / HTML) anzeigt. 
function hello() {
  console.log("Hallo");
  document.write('Hallo' + '<br>');
}

hello();

// Schreibe eine Funktion, die die Summe von zwei Zahlen in deinem Browser (console / HTML)  anzeigt.  (x=2; y=3)
function sum() {
  let x = 2;
  let y = 3;

  console.log(x + y);
  document.write(x + y + '<br>');
}

sum();

// Schreibe eine Funktion, die die Multiplikation von zwei Zahlen als Alert ausgibt. (x=2; y=3)
function multiplication() {
  let x = 2;
  let y = 3;

  // alert(x * y);
}

multiplication();

// Schreibe eine Funktion, die einen Parameter nimmt und den Typ dieses Elements in deinem Browser (console / HTML) anzeigt.
function type(what) {
  console.log(typeof(what));
  document.write(typeof(what) + '<br>');
}

let i = true;
let j = 'hi';
let k = 1;
let l = {name: 'John'};
let a = [0, 1];

type(i);
type(j);
type(k);
type(l);
type(a);

// konvertiere die normalen Funktionen in Arrow Funktionen.
hello = () => {
  console.log("Hallo");
  document.write('Hallo' + '<br>');
}

hello();

sum = () => {
  let x = 2;
  let y = 3;

  console.log(x + y);
  document.write(x + y + '<br>');
}

sum();

multiplication = () => {
  let x = 2;
  let y = 3;

  // alert(x * y);
}

multiplication();

type = (what) => {
  console.log(typeof(what));
  document.write(typeof(what) + '<br>');
}

type(i);
type(j);
type(k);
type(l);
type(a);

/*
####################
      lev1_4
####################
*/

function hero(heroName, heroPower, heroEnemy) {
  let name = 'Mein Lieblingsheld aus Marvel ist: ' + heroName;
  let power = 'Er hat die Fähigkeit: ' + heroPower;
  let enemy = 'Sein größter Gegner ist: ' + heroEnemy;

  console.log(name);
  console.log(power);
  console.log(enemy);
}

hero('Spider-Man', 'Netze zu schießen', 'Venom');

hero = (heroName, heroPower, heroEnemy) => {
  let name = 'Mein Lieblingsheld aus Marvel ist: ' + heroName;
  let power = 'Er hat die Fähigkeit: ' + heroPower;
  let enemy = 'Sein größter Gegner ist: ' + heroEnemy;

  console.log(name);
  console.log(power);
  console.log(enemy);
}

hero('Spider-Man', 'Netze zu schießen', 'Venom');

/*
####################
      lev1_6
####################
*/

function returnOne() {
  return 1;
}

let x = 1;
let y = returnOne();

if(x === y) {
  console.log('Wird das gedruckt?');
}

/*
####################
      lev1_7
####################
*/

function calc(index) {
  return index * 2;
}

console.log(calc(4));

/*
####################
      lev1_8
####################
*/

function yourYear(yearBorn) {
  let year = new Date();

  return year.getFullYear() - yearBorn;
}

console.log(yourYear(1991));

function ageDiff(age1, age2) {
  let alter1 = age1;
  let alter2 = age2;

  let alterDiff = alter1 - alter2;

  return Math.abs(alterDiff);
}

console.log(ageDiff(30, 21));

/*
####################
      lev1_9
####################
*/

function me(firstName, lastName, placeOfBirth, age, residence) {
  console.log('Mein Name ist ' + firstName + ' ' + lastName + '.');
  console.log('Ich bin in ' + placeOfBirth + ' geboren.');
  console.log('Ich lerne Code bei SuperCode.');
  console.log('Ich bin ' + age + ' Jahre alt.');
  console.log('Ich wohne in ' + residence + '.');
}

me('Baschar', 'Shaheen', 'Syrien', 34, 'Düsseldorf');
