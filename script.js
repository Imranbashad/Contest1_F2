/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  const developers = arr.filter(item => item.profession === "developer");
  developers.map(dev => console.log(dev));
}

function PrintDeveloperbyForEach() {
  arr.forEach(item => {
    if (item.profession === "developer") {
      console.log(item);
    }
  });
}

function addData() {
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  const updatedArr = arr.filter(item => item.profession !== "admin");
  console.log(updatedArr);
}

function concatenateArray() {
  const newArr = [
    { id: 5, name: "Batman", age: "37", profession: "designer" },
    { id: 6, name: "superman", age: "40", profession: "manager" },
    { id: 7, name: "Flash", age: "27", profession: "analyst" },
  ];
  const combinedArr = arr.concat(newArr);
  console.log(combinedArr);
}
