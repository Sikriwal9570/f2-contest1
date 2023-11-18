
const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  
  function printDeveloper() {
    const developers = data.filter(person => person.profession === "developer");
    console.log("Developers:", developers);
  }
  
  function addData() {
    const newName = prompt("Enter name:");
    const newAge = parseInt(prompt("Enter age:"));
    const newProfession = prompt("Enter profession:");
    
    const newData = { name: newName, age: newAge, profession: newProfession };
    data.push(newData);
  }
  
  function removeAdmin() {
    const nonAdmins = data.filter(person => person.profession !== "admin");
    data.length = 0;
    data.push(...nonAdmins);
    console.log("Admins removed:", data);
  }
  
  function concatenateArray() {
    const dummyArray = [
      { name: "charlie", age: 30, profession: "designer" },
      
    ];
    const resultArray = data.concat(dummyArray);
    console.log("Concatenated Array:", resultArray);
  }
  
  function averageAge() {
    const totalAge = data.reduce((acc, person) => acc + person.age, 0);
    const average = totalAge / data.length;
    console.log("Average Age:", average);
  }
  
  function checkAgeAbove25() {
    const result = data.some(person => person.age > 25);
    console.log("At least one person above 25:", result);
  }
  
  
  function uniqueProfessions() {
    const professions = data.map(person => person.profession);
    const uniqueProfessions = [...new Set(professions)];
    console.log("Unique Professions:", uniqueProfessions);
  }
  
  
  function sortByAge() {
    data.sort((a, b) => a.age - b.age);
    console.log("Sorted Data:", data);
  }
  
  
  function updateJohnsProfession() {
    const john = data.find(person => person.name === "john");
    if (john) {
      john.profession = "manager";
      console.log("John's profession updated:", john);
    }
  }
  
  
  function getTotalProfessions() {
    const professionCount = data.reduce((acc, person) => {
      acc[person.profession] = (acc[person.profession] || 0) + 1;
      return acc;
    }, {});
    console.log("Profession Count:", professionCount);
  }
  