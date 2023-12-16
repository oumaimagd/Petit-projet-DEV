var plusButtons = document.querySelectorAll(".plus");
var minusButtons = document.querySelectorAll(".minus");
var deleteButtons = document.querySelectorAll(".delete");
var likeButtons = document.querySelectorAll(".like");
var totalElement = document.querySelector("#total");
var purchaseButton = document.getElementById("purchase-button");

function inc(e) {
  var clickedButton = e.target;
  var parentArticle = clickedButton.closest(".product");
  var adjParagraph = parentArticle.querySelector(".quantity span");
  var unitPriceText = parentArticle.querySelector(".unitPrice").innerHTML;
  var value = Number(adjParagraph.innerHTML);
  value++;
  adjParagraph.innerHTML = value;

  var unitPrice = parseFloat(
    unitPriceText.split(":")[1].replace("dt", "").trim()
  );
  var calculated = value * unitPrice;
  parentArticle.querySelector(".price").innerHTML = calculated;

  updateTotal();
}

function dec(e) {
  var clickedButton = e.target;
  var parentArticle = clickedButton.closest(".product");
  var adjParagraph = parentArticle.querySelector(".quantity span");
  var value = Number(adjParagraph.innerHTML);
  if (value > 0) {
    value--;
  }
  adjParagraph.innerHTML = value;

  var unitPriceText = parentArticle.querySelector(".unitPrice").innerHTML;
  var unitPrice = parseFloat(
    unitPriceText.split(":")[1].replace("dt", "").trim()
  );
  var calculated = value * unitPrice;
  parentArticle.querySelector(".price").innerHTML = calculated;

  updateTotal();
}

function deleteRow(e) {
  var clickedButton = e.target;
  var parentArticle = clickedButton.closest(".product");
  var prices = parentArticle.querySelector(".price");
  prices.innerHTML = 0;
  updateTotal();
  parentArticle.remove();
}

function updateTotal() {
  var total = 0;
  var prices = document.querySelectorAll(".price");
  for (let i = 0; i < prices.length; i++) {
    total += parseFloat(prices[i].innerHTML);
  }

  totalElement.innerHTML = total;
}

function changeColor(e) {
  var clickedButton = e.target;
  if (clickedButton.style.color == "red") {
    clickedButton.style.color = "black";
  } else {
    clickedButton.style.color = "red";
  }
}
function purchase() {
  var totalAmount = totalElement.innerHTML;
  alert("Achat effectué ! Montant total : " + totalAmount);
}

for (let i = 0; i < plusButtons.length; i++) {
  plusButtons[i].addEventListener("click", inc);
}

for (let i = 0; i < minusButtons.length; i++) {
  minusButtons[i].addEventListener("click", dec);
}

for (let i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener("click", deleteRow);
}

for (let i = 0; i < likeButtons.length; i++) {
  likeButtons[i].addEventListener("click", changeColor);
}
purchaseButton.addEventListener("click", purchase);
function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email === "oumaimagdiri@gmail.com" && password === "123456789") {
    window.location.href = "index.html";
  } else {
    document.getElementById("error-message").innerText =
      "Identifiants incorrects";
  }
}
