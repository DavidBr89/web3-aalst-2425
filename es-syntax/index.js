const courses = ["Web 1", "Web 2", "Web 3", "Mobile", "Programmeren Basis"];
const numbers = [1, 2, 3, 4, 5];

// Manuele for loop gebruiken we nog als we willen het break statement gebruiken
for (let idx = 0; idx < courses.length; idx++) {
  const element = courses[idx];
  if (element === "Web 2") {
    break;
  }
  console.log(element);
}

// FOREACH methode

const newCourses = courses.forEach((c, idx) => {
  console.log(c);
});

// Void functies bestaan niet in JS -> returnt undefined
console.log(newCourses);

// MAP methode
// Callback functie moet steeds iets returnen

// let tempArr = [];
// numbers.forEach((n) => tempArr.push(n * 5));

const newNumbers = numbers.map((n, idx) => n * 5);

// Eventueel TODO tree extensie van VSCode
// TODO: Zet alle elementen van courses in lowercase met de map methode

// REDUCE methode
// Callback functie moet steeds iets returnen

const sumOfNumbers = numbers.reduce((acc, val, idx) => {
  return acc + val;
}, 0);

[].reduce((acc, val) => acc + val, 0);

const sumOfNumbs = numbers.reduce((acc, val) => acc + val, "");
console.log(sumOfNumbs);

// TODO: Alle oneven getallen optellen met reduce
const sumOfOdds = numbers.reduce((acc, val) => {
  if (val % 2 === 1) {
    return acc + val;
  }
  return acc;
}, 0);

// FILTER methode
// Predikaat functie moet steeds true of false returnen
const filteredCourses = courses.filter((c) => c !== "Programmeren Basis");
console.log(filteredCourses);

// SOME methode
// Als er minstens 1 element gelijk is aan de conditie
const isOneNumberHundred = numbers.some((n) => n === 100);

// EVERY methode
const areAllNumbersHundred = numbers.every((n) => n === 100);

// REST parameter

// TODO: functie schrijft dat de som berekent van 0, 1, 2 of meerdere getallen

const sum = (...arr) => {
  return arr.reduce((acc, val) => acc + val, 0);
};

sum();
sum(1);
sum(2, 3);
sum(3, 4, 5);
sum(9, 42, 4242, 1314, 423);

const arr1 = [1, 34, 52423452];
const arr2 = [5252, 3252, 4252];
const arr3 = [45];

const arr4 = arr1.concat(arr2).concat(arr3);

// SPREAD OPERATOR
const arr5 = [...arr1, ...arr2, ...arr3];

const student = {
  firstName: "David",
  lastName: "Breckx",
  address: {
    street: "Arbeidsstraat 14",
    city: "Aalst",
    postalCode: 9300,
  },
};

// Opgelet voor de volgorde om waarden te overschrijven met dezelfde properties
const studentCopy = { ...student, lastName: "Doe", age: 34 };

// Destructuring

const titles = ["Horror", "Thriller", "Actie", "Avontuur", "Animatie"];
// const horrorTitle = titles[0];
// const thrillerTitle = titles[1];

const [horrorTitle, thrillerTitle, , avontuurTitle] = [
  "Horror",
  "Thriller",
  "Actie",
  "Avontuur",
  "Animatie",
];

console.log(avontuurTitle);

const lastName = "Doe";

const {
  firstName,
  address,
  address: { city },
  lastName: lName,
} = student;

console.log(address);

const newStudent = {
  fName: "David",
  study: function () {
    console.log(`Student ${this.fName} is aan het studeren`);
  },
};

console.log(newStudent.study());

// Pizzeria - JS

console.log("Bestelling is ontvangen");
setTimeout(() => {
  console.log("Deeg is uitgerold");
  setTimeout(() => {
    console.log("Ingrediënten zijn toegevoegd");
    setTimeout(() => {
      console.log("Pizza in de oven!");
      setTimeout(() => {
        console.log("Bestelling afgeleverd!");
      }, 1000);
    }, 10000);
  }, 2000);
}, 5000);

// TODO: Maak uw eigen map functie
const ownMap = (arr, cb) => {
  // Stap 1: Lege array maken
  const tempArr = [];
  // Stap 2: Loopen over de arr dat binnenkomt
  arr.forEach((e) => {
    // Stap 3: functie dat je binnenkrijgt cb die uitvoert op dat element
    const newElement = cb(e);
    // Stap 4: die uitkomst van de functie dat je uitgevoerd hebt in de array pushen
    tempArr.push(newElement);
  });
  // Stap 5: returnen van de nieuwe array
  return tempArr;
};

console.log(ownMap(arr5, (e) => e * 10));
console.log(ownMap(arr4, (e) => e.toString()));

// PROMISES

// Producing code -
const myPromise = new Promise((resolve, reject) => {
  // SQL query -> om iets uit de databank te halen
  setTimeout(() => {
    const isSuccesfull = false;

    if (isSuccesfull) {
      const data = ["Web 3"];
      resolve(data);
    } else {
      reject("Er is een fout gebeurd!");
    }
  }, 1000);
});

// Consuming code - Code waarop we moeten wachten

myPromise
  .then((data) => {
    console.log("Promise was succesvol! ", data);
  })
  .catch((err) => {
    console.log("Promise was rejected! ", err);
  })
  .finally(() => {
    console.log("Deze code wordt altijd uitgevoerd!");
  });

// ASYNC AWAIT

const asyncFunc = async () => {
  try {
    const data = await myPromise;
    console.log(data);

    await myPromise1;
    await myPromise2;
    await myPromise3;
  } catch (error) {
    console.log(error);
  }
};

asyncFunc();
