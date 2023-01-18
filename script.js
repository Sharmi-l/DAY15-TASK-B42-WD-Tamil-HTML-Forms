
// POPUP MESSAGE:

let popup = document.getElementById("popupMessage");

function openPopup() {
    popup.classList.add("open-popup");
}

function closePopup() {
    popup.classList.remove("open-popup");
}

// .............................................................................//

//heading tag
let heading = document.createElement("h1");
heading.innerText = "Data Storage On Table"
heading.setAttribute("class","mainhead"); 
document.body.append(heading);

//create a table using DOM:

//div 


let div = document.createElement("div");
div.setAttribute("class","container1");


//table

let tabletag = document.createElement("table");
tabletag.setAttribute("class","table");


//thead
const tablehead = document.createElement("thead");
tablehead.setAttribute("class","theading");
tabletag.append(tablehead);

//tr    (thead row)
const tr1 = document.createElement("tr");
tablehead.append(tr1);

//th      
let cellth1 = document.createElement("th");
cellth1.innerText = "First Name";
tr1.append(cellth1);

let cellth2 = document.createElement("th");
cellth2.innerText = "Last Name";
tr1.append(cellth2);

let cellth3 = document.createElement("th");
cellth3.innerText = "Address";
tr1.append(cellth3);

let cellth4 = document.createElement("th");
cellth4.innerText = "Pincode";
tr1.append(cellth4);

let cellth5 = document.createElement("th");
cellth5.innerText = "Gender";
tr1.append(cellth5);

let cellth6 = document.createElement("th");
cellth6.innerText = "Food";
tr1.append(cellth6);

let cellth7 = document.createElement("th");
cellth7.innerText = "State";
tr1.append(cellth7);

let cellth8 = document.createElement("th");
cellth8.innerText = "Country";
tr1.append(cellth8);
console.log(tr1)

//tbody 
const tablebody = document.createElement("tbody");
tablebody.setAttribute("id","list");
tabletag.appendChild(tablebody);


div.append(tabletag);
document.body.append(div);


// .............................................................................//

// Functionality for form table:

function getData(ele){
ele.preventDefault();


let fname = document.getElementById("fname").value;
let lname = document.getElementById("lname").value;
let address = document.getElementById("inputAddress").value;
let pincode = document.getElementById("pincode").value;
let gender = document.getElementById("gender").value;

// Select the food items:
let foods = document.getElementsByClassName("box");

let food_Length = foods.length;

let checking = [];

    for(let i=0; i<food_Length; i++){
          if(foods[i].checked ){

            checking.push(foods[i].value);
            
          }
         
    }
    
let states = document.getElementById("inputState").value;
let countries = document.getElementById("inputCountry").value;


// Push the datas on table after submit:
let table_content = document.getElementById("list").insertRow();
table_content.innerHTML = `
<tr>          
<th scope="col">${fname}</th>
<th scope="col">${lname}</th>
<th scope="col">${address}</th>
<th scope="col">${pincode}</th>
<th scope="col">${gender}</th>
<th scope="col">${checking}</th>
<th scope="col">${states}</th>
<th scope="col">${countries}</th>
</tr> 
`   
// Reset the datas on table after submit:
document.getElementById('form').reset();
}; 


//Condition for select any 2 food items only:

function  myfunction(foodSelect) {
  var foodSelect = document.getElementsByClassName("box");
  let count;
  let initial = 0;

  for(count = 0; count < foodSelect.length; count++)
  {
    if(foodSelect[count].checked == true)
    {
      initial = initial + 1;
    }
    if(initial > 2)
    {
      return false
    }
  }
};