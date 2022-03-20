const modal = document.getElementById("myModal");
const modal2 = document.getElementById("myModal2");
const modal3 = document.getElementById("myModal3");
const modal4 = document.getElementById("myModal4");

const btn = document.getElementById("mybtn");
const btn2 = document.getElementById("mybtn2");
const btn3 = document.getElementById("mybtn3");
const btn4 = document.getElementById("mybtn4");
const  span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

btn2.onclick = function () {
   
  modal2.style.display = "block";
};

btn3.onclick = function () {
  modal3.style.display = "block";
};


btn4.onclick = function () {
  modal4.style.display = "block";
};

span.onclick = function() {
    console.log("hey,hey");
    if(event.target == modal){
      modal.style.display = "none";
    }
 
  // modal2.style.display ="none";
};

// span.onclick = function() {
//   console.log("hey,hey");
// modal2.style.display = "none";
// };

// span.onclick = function() {
//   console.log("hey,hey");
// modal3.style.display = "none";
// };

// span.onclick = function() {
//   console.log("hey,hey");
// modal.style.display = "none";
// };




