const myObj = {
  firstName: "Henrique",
  lastName: "Vieira",
  age: 35,
  hasPets: false,
};

const myJson = JSON.stringify(myObj);

console.log(myJson);

// It will return the string :
/*
"{"firstName":"Henrique","lastName":"Vieira","age":35,"hasPets":false}"
*/


console.log(JSON.parse(myJson));

// It will return an object :

/*

{
  firstName: "Henrique",
  lastName: "Vieira",
  age: 35,
  hasPets: false,
};

*/