// object constructor
function person(id, first, last, address, phone ){
    this.contactID = id;
this.firstName = first;
this.lastName = last;
this.address = address;
this.phone = phone;
}
var objArray = [] // explain

readInfofromTextBox(){
   var storeID = document.getElementById('readID').value
   var storeFirstName = document.getElementById('readFirstName').value
   var storeLastName = document.getElementById('readLastName').value
   var storeAddress = document.getElementById('readAddress').value
   var storePhoneNo = document.getElementById('readPhoneNo').value

   var obj = new person(storeID,storeFirstName,storeLastName, storeAddress,storePhoneNo )
   objArray.push(obj)//expliain
}




// Object creation: <!DOCTYPE html>

// <html>
// <body><h2>JavaScript Object Constructors</h2><p id="demo"></p><script>
// // Constructor function for Person objects
// function Person(first, last, age, eye) {
// this.firstName = first;
// this.lastName = last;
// this.age = age;
// this.eyeColor = eye;
// }

// // Create a Person object
// const myFather = new Person("John", "Doe", 50, "blue");
// const myMother = new Person("Mary", "Doe", 45, "black");

// // Display age
// document.getElementById("demo").innerHTML =
// "My father is " + myFather.age + ".";
// </script></body>
// </html>