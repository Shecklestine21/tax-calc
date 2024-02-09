///// Input
document.getElementById("button").addEventListener("click", calculate);
function calculate() {
let price = +document.getElementById("ogprice").value;    
///// Process
let tax = (price) * 0.05;
tax = tax.toFixed(2);
console.log(price);
/////output
document.getElementById("finaltax").innerHTML = "you pay an extra " + tax + " dollars in gst or sales tax";
}

