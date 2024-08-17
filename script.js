/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map((developer) => {
      if (developer.profession == "developer") {
        console.log(developer);
      }
    });
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((developer) => {
      if (developer.profession == "developer") {
        console.log(developer);
      }
    });
  }
  
  function addData() {
    //Write your code here, just console.log
    let newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
    arr.push(newEmployee);
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    const newarr = arr.filter((employee) => {
      return employee.profession != "admin";
    });
    console.log(newarr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let arr2 = [
      { id: 4, name: "soniya", age: "28", profession: "desiginer" },
      { id: 5, name: "jacky", age: "30", profession: "officer" },
      { id: 6, name: "vanya", age: "29", profession: "influencer" },
    ];
    let result = arr.concat(arr2);
    console.log(result);
  }
  