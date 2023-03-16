// function counter(num) {
//   let count = num;
//   return function (num2) {
//     return count + num2;
//   };
// }
// let makeCounter = counter(5);
// console.log(makeCounter(2));

// function counter() {
//   let son = prompt("1 va 10 oralig'idan sonni kiriting...");
//   son *= 1;
//   return function () {
//     if (son == 5) {
//       console.log("to'g'ri son kiritildi");
//     } else {
//       son = prompt("1 va 10 oralig'idan sonni kiriting...");
//     }
//   };
// }
// let counterchild = counter();
// counterchild();

// ============================================================

// function counter() {
//   let h1 = document.getElementById("h1");
//   let son = prompt("1 va 10 oralig'idan son kiriting...");
//   son *= 1;
//   if (son == 5) {
//     h1.innerHTML =
//       " " +
//       "son to'g'ri topildi" +
//       " <i style = color:green; class='fa fa-check' aria-hidden='true'></i>";
//   } else {
//     counter();
//   }
// }
// counter();

//   ===========================================================

function Pizza() {
  let username = document.getElementById("username").value;
  let phone = document.getElementById("phone_number").value;
  let address = document.getElementById("user_address").value;
  let myform = document.getElementById("myform");
  let dough = document.getElementById("dough").value;
  let radioshow = document.querySelectorAll(".radioshow");
  let check = document.querySelectorAll(".check");
  let add_preparat = document.querySelectorAll(".add_preparat");
  let modal_block = document.querySelector(".modal_block");
  let count = 0;
  let sum = 0;
  let sum2 = 0;

  // radio checked
  let radio = "";
  for (let i = 0; i < radioshow.length; i++) {
    if (radioshow[i].checked) {
      radio = radioshow[i].value;
    }
  }

  // On Pizza checked
  let checkedcheck = "";
  for (let i = 0; i < check.length; i++) {
    if (check[i].checked) {
      checkedcheck += check[i].value + ", ";
      sum++;
    }
  }

  // Add preparat checked
  let added = "";
  for (let i = 0; i < add_preparat.length; i++) {
    if (add_preparat[i].checked) {
      added += add_preparat[i].value + ", ";
      sum2++;
    }
  }

  if (dough == "Thin") {
    count = 10;
  } else if (dough == "Medium") {
    count = 12;
  } else if (dough == "Thick") {
    count = 15;
  } else if (dough == "none") {
    count = 0;
  }

  if (radio == "25sm") {
    count += 10;
  } else if (radio == "30sm") {
    count += 12;
  } else if (radio == "35sm") {
    count += 15;
  } else {
    count += 0;
  }
  let total = count + sum * 5 + sum2 * 3;

  modal_block.style.display = "block";

  modal_block.innerHTML = `

<h2>Order: 1</h2>
<h3>
  Name:
  <p>${username}</p>
</h3>
<h3>
  Phone:
  <p>${phone}</p>
</h3>
<h3>
  Addres:
  <p>${address}</p>
</h3>
<hr />
<h3>
  Dough thickness:
  <p>${dough}</p>
</h3>
<h3>
  Size:
  <p>${radio}</p>
</h3>
<h3>
  On Pizza:
  <p>${checkedcheck}</p>
</h3>
<h3>
  Add:
  <p>${added}</p>
</h3>
<hr />
<h3>
  Total:
  <p>${total}$</p>
</h3>
<button id="close" onclick = "modalClose()">Close</button>

`;
  myform.reset();
}

function modalClose() {
  let modal_block = document.querySelector(".modal_block");
  modal_block.style.display = "none";
}
