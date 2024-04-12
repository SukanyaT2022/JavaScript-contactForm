// object constructor
function person(id, first, last, address, phone) {
  this.contactID = id;
  this.firstName = first;
  this.lastName = last;
  this.address = address;
  this.phone = phone;
}
var objArray = []; // explain

function readInfofromTextBox() {
  var storeID = document.getElementById('readID').value;
  var storeFirstName = document.getElementById('readFirstName').value;
  var storeLastName = document.getElementById('readLastName').value;
  var storeAddress = document.getElementById('readAddress').value;
  var storePhoneNo = document.getElementById('readPhoneNo').value;

  var obj = new person(
    storeID,
    storeFirstName,
    storeLastName,
    storeAddress,
    storePhoneNo
  );
  objArray.push(obj); //expliain
  displayContact();
}

// when insert new contact - it displays on the page

function displayContact() {
  //line 27 to 30 empty div before user add more contact on the list
  var div = document.getElementById('contactList');
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }

  for (i = 0; i < objArray.length; i++) {
    var div = document.createElement('div');
    div.setAttribute('class', 'contact'); //control individual small box use this class
    //create name last name
    var p1 = document.createElement('p'); //make paragraph tag
    var text = document.createTextNode(
      'name:' + objArray[i].firstName + ' ' + objArray[i].lastName
    );
    p1.appendChild(text); //put text line 29 to paragraph line 28
    div.appendChild(p1); // after that put paragraph on the white box div

    //create id
    var p2 = document.createElement('p'); //make paragraph tag
    var text2 = document.createTextNode('ID:' + objArray[i].contactID);
    p2.appendChild(text2); //put text line 29 to paragraph line 28
    div.appendChild(p2); // after that put paragraph on the white box div

    //create address
    var p3 = document.createElement('p'); //make paragraph tag
    var text3 = document.createTextNode('Address:' + objArray[i].address);
    p3.appendChild(text3); //put text line 29 to paragraph line 28
    div.appendChild(p3); // after that put paragraph on the white box div

    //create phone
    var p4 = document.createElement('p'); //make paragraph tag
    var text4 = document.createTextNode('Phone:' + objArray[i].phone);
    p4.appendChild(text4); //put text line 29 to paragraph line 28
    div.appendChild(p4); // after that put paragraph on the white box div

    var button = document.createElement('input');
    button.setAttribute('type', 'button');
    button.setAttribute('value', 'Delete');
    button.setAttribute('class', 'btnDelete');
    div.appendChild(button); // put button on small div box

    document.getElementById('contactList').appendChild(div); //we add all info small box in line 26 mainbox
  }
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
