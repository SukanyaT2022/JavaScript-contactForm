// object constructor
function person(id, first, last, address, phone) {
  this.contactID = id;
  this.firstName = first;
  this.lastName = last;
  this.address = address;
  this.phone = phone;
}
var objArray = []; 

function readInfofromTextBox() {
  var storeID = document.getElementById('readID').value;
  var storeFirstName = document.getElementById('readFirstName').value;
  var storeLastName = document.getElementById('readLastName').value;
  var storeAddress = document.getElementById('readAddress').value;
  var storePhoneNo = document.getElementById('readPhoneNo').value;
//create new object
  var obj = new person(
    storeID,
    storeFirstName,
    storeLastName,
    storeAddress,
    storePhoneNo
  );
  objArray.push(obj); //push obj to obj array
//then display
  displayContact();

  //then make input box blank
  //below make input box empty after user fill all input and click add contact
document.getElementById('readID').value = ""
document.getElementById('readFirstName').value = ""
document.getElementById('readLastName').value = ""
document.getElementById('readAddress').value = ""
document.getElementById('readPhoneNo').value = ""
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


    //create id
    var p2 = document.createElement('p'); //make paragraph tag
    var text2 = document.createTextNode('ID:' + objArray[i].contactID);
    p2.appendChild(text2); //put text line 29 to paragraph line 28
    div.appendChild(p2); // after that put paragraph on the white box div

    //create name last name
    var p1 = document.createElement('p'); //make paragraph tag
    var text = document.createTextNode(
      'name:' + objArray[i].firstName + ' ' + objArray[i].lastName
    );
    p1.appendChild(text); //put text line 29 to paragraph line 28
    div.appendChild(p1); // after that put paragraph on the white box div


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
    button.setAttribute('onclick','deleteObjButton('+objArray[i].contactID + ')')
    div.appendChild(button); // put button on small div box

    document.getElementById('contactList').appendChild(div); //we add all info small box in line 26 mainbox
  }
}

//function delete button link in line81

function deleteObjButton(id){
for (i=0;i<objArray.length;i++){
    if(objArray[i].contactID==id){
objArray.splice(i,1)//delete 1 object at i
break
    }
}
//after delete then we refresh
displayContact()
}

// modal 

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
var flag = false // if not found id ahow not found

  modal.style.display = "block";
  var readSearchID = document.getElementById('searchID').value;
  while (modal.firstChild) {
    modal.removeChild(modal.firstChild);

  }
for(i=0;i<objArray.length;i++){
  console.log(objArray[i].contactID)
    if(objArray[i].contactID == readSearchID){
flag = true
         modal.setAttribute('class', 'contact'); //control individual small box use this class
          
          //create id
          var p2 = document.createElement('p'); //make paragraph tag
          var text2 = document.createTextNode('ID:' + objArray[i].contactID);
          p2.appendChild(text2); //put text line 29 to paragraph line 28
          modal.appendChild(p2); // after that put paragraph on the white box modal
      
          //create name last name
          var p1 = document.createElement('p'); //make paragraph tag
          var text = document.createTextNode(
            'name:' + objArray[i].firstName + ' ' + objArray[i].lastName
          );
          p1.appendChild(text); //put text line 29 to paragraph line 28
          modal.appendChild(p1); // after that put paragraph on the white box modal
      
      
          //create address
          var p3 = document.createElement('p'); //make paragraph tag
          var text3 = document.createTextNode('Address:' + objArray[i].address);
          p3.appendChild(text3); //put text line 29 to paragraph line 28
          modal.appendChild(p3); // after that put paragraph on the white box modal
      
          //create phone
          var p4 = document.createElement('p'); //make paragraph tag
          var text4 = document.createTextNode('Phone:' + objArray[i].phone);
          p4.appendChild(text4); //put text line 29 to paragraph line 28
          modal.appendChild(p4); // after that put paragraph on the white box modal
      
          var button = document.createElement('input');
          button.setAttribute('type', 'button');
          button.setAttribute('value', 'Delete');
          button.setAttribute('class', 'btnDelete');
          button.setAttribute('onclick','deleteObjButton('+objArray[i].contactID + ')')
          modal.appendChild(button); // put button on small modal box
      
        //   document.getElementById('contactList').appendChild(modal); //we add all info small box in line 26 mainbox
        }  
    }
    document.getElementById('searchID').value =''
    if(flag==false){
      modal.setAttribute('class', 'contact'); //control individual small box use this class
          
      var p2 = document.createElement('p'); //make paragraph tag
      p2.setAttribute('id', 'tagetNotFoundText')
      var text2 = document.createTextNode('Contact is not found');
      p2.appendChild(text2); //put text line 29 to paragraph line 28
      modal.appendChild(p2); // after that put paragraph on the white box modal
  
    }
}


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// searchbox
function readValueSearchBox(){

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
