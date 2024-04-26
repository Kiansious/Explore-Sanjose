/*Adjust Amount Script of my products*/
/*Product1 script*/
function prod1add(){
    var a = parseInt(document.getElementById("prod1tbox").value);
var b = 1;
var c = a + b;

if (c > 15) {
alert('There are only 15 stocks of this product.');
c = 15;
}

document.getElementById("prod1tbox").value = c;
}
function prod1deduct(){
    var a = parseInt(document.getElementById("prod1tbox").value);
           var b = 1;
           var c = a - b;
           document.getElementById("prod1tbox").value = c ;
           if(a <= 0){
             alert('cannot exceed below zero');
             document.getElementById("prod1tbox").value = 0;
}
}
/*Product2 script */
function prod2add(){
    var a = parseInt(document.getElementById("prod2tbox").value);
var b = 1;
var c = a + b;

if (c > 15) {
alert('There are only 15 stocks of this product.');
c = 15;
}

document.getElementById("prod2tbox").value = c;
}
function prod2deduct(){
    var a = parseInt(document.getElementById("prod2tbox").value);
           var b = 1;
           var c = a - b;
           document.getElementById("prod2tbox").value = c ;
           if(a <= 0){
             alert('cannot exceed below zero');
             document.getElementById("prod2tbox").value = 0;
}
}
/*Product3 script */
function prod3add(){
    var a = parseInt(document.getElementById("prod3tbox").value);
var b = 1;
var c = a + b;

if (c > 15) {
alert('There are only 15 stocks of this product.');
c = 15;
}

document.getElementById("prod3tbox").value = c;
}
function prod3deduct(){
    var a = parseInt(document.getElementById("prod3tbox").value);
           var b = 1;
           var c = a - b;
           document.getElementById("prod3tbox").value = c ;
           if(a <= 0){
             alert('cannot exceed below zero');
             document.getElementById("prod3tbox").value = 0;
}
}
/*Product4 script */
function prod4add(){
    var a = parseInt(document.getElementById("prod4tbox").value);
var b = 1;
var c = a + b;

if (c > 15) {
alert('There are only 15 stocks of this product.');
c = 15;
}

document.getElementById("prod4tbox").value = c;
}
function prod4deduct(){
    var a = parseInt(document.getElementById("prod4tbox").value);
           var b = 1;
           var c = a - b;
           document.getElementById("prod4tbox").value = c ;
           if(a <= 0){
             alert('cannot exceed below zero');
             document.getElementById("prod4tbox").value = 0;
}
}
/*Product5 script */
function prod5add(){
    var a = parseInt(document.getElementById("prod5tbox").value);
var b = 1;
var c = a + b;

if (c > 15) {
alert('There are only 15 stocks of this product.');
c = 15;
}

document.getElementById("prod5tbox").value = c;
}
function prod5deduct(){
    var a = parseInt(document.getElementById("prod5tbox").value);
           var b = 1;
           var c = a - b;
           document.getElementById("prod5tbox").value = c ;
           if(a <= 0){
             alert('cannot exceed below zero');
             document.getElementById("prod5tbox").value = 0;
}
}
/*Product6 script */
function prod6add(){
    var a = parseInt(document.getElementById("prod6tbox").value);
var b = 1;
var c = a + b;

if (c > 15) {
alert('There are only 15 stocks of this product.');
c = 15;
}

document.getElementById("prod6tbox").value = c;
}
function prod6deduct(){
    var a = parseInt(document.getElementById("prod6tbox").value);
           var b = 1;
           var c = a - b;
           document.getElementById("prod6tbox").value = c ;
           if(a <= 0){
             alert('cannot exceed below zero');
             document.getElementById("prod6tbox").value = 0;
}
}
/*Add to cart function*/
/*Prod1*/
var totalAmount = 0;

function addproduct1() {
    var quantity = parseInt(document.getElementById("prod1tbox").value);
    var productName = "Earrings";
    var productPrice = 120.00;
    var total = quantity * productPrice;
    
    /* Update the item list textarea with the product details*/
    var itemListTextarea = document.getElementById("itemListTbox");
    itemListTextarea.value += `${productName} - Quantity: ${quantity}, Total: ₱${total.toFixed(2)}\n`;

    /*Update the total amount varisble*/
    totalAmount += total;

    /*Update the total amount textarea with the accumulated total price*/
    var amountTextarea = document.getElementById("amountT`box");
    amountTextarea.value = `₱${totalAmount.toFixed(2)}`;
}

/*Prod2*/

var totalAmount = 0;

function addproduct2() {
    var quantity = parseInt(document.getElementById("prod2tbox").value);
    var productName = "Necklace";
    var productPrice = 180.00;
    var total = quantity * productPrice;
    

    var itemListTextarea = document.getElementById("itemListTbox");
    itemListTextarea.value += `${productName} - Quantity: ${quantity}, Total: ₱${total.toFixed(2)}\n`;


    totalAmount += total;


    var amountTextarea = document.getElementById("amountTbox");
    amountTextarea.value = `₱${totalAmount.toFixed(2)}`;
}

/*Prod3*/

var totalAmount = 0;

function addproduct3() {
    var quantity = parseInt(document.getElementById("prod3tbox").value);
    var productName = "Bracelet";
    var productPrice = 110.00;
    var total = quantity * productPrice;
    

    var itemListTextarea = document.getElementById("itemListTbox");
    itemListTextarea.value += `${productName} - Quantity: ${quantity}, Total: ₱${total.toFixed(2)}\n`;


    totalAmount += total;


    var amountTextarea = document.getElementById("amountTbox");
    amountTextarea.value = `₱${totalAmount.toFixed(2)}`;
}

/*Prod4*/

var totalAmount = 0;

function addproduct4() {
    var quantity = parseInt(document.getElementById("prod4tbox").value);
    var productName = "Headdress";
    var productPrice = 220.00;
    var total = quantity * productPrice;
    

    var itemListTextarea = document.getElementById("itemListTbox");
    itemListTextarea.value += `${productName} - Quantity: ${quantity}, Total: ₱${total.toFixed(2)}\n`;


    totalAmount += total;


    var amountTextarea = document.getElementById("amountTbox");
    amountTextarea.value = `₱${totalAmount.toFixed(2)}`;
}

/*Prod5*/

var totalAmount = 0;

function addproduct5() {
    var quantity = parseInt(document.getElementById("prod5tbox").value);
    var productName = "Woven Basket";
    var productPrice = 200.00;
    var total = quantity * productPrice;
    

    var itemListTextarea = document.getElementById("itemListTbox");
    itemListTextarea.value += `${productName} - Quantity: ${quantity}, Total: ₱${total.toFixed(2)}\n`;


    totalAmount += total;


    var amountTextarea = document.getElementById("amountTbox");
    amountTextarea.value = `₱${totalAmount.toFixed(2)}`;
}

/*Prod6*/

var totalAmount = 0;

function addproduct6() {
    var quantity = parseInt(document.getElementById("prod6tbox").value);
    var productName = "Woven Bag";
    var productPrice = 320.00;
    var total = quantity * productPrice;
    

    var itemListTextarea = document.getElementById("itemListTbox");
    itemListTextarea.value += `${productName} - Quantity: ${quantity}, Total: ₱${total.toFixed(2)}\n`;


    totalAmount += total;


    var amountTextarea = document.getElementById("amountTbox");
    amountTextarea.value = `₱${totalAmount.toFixed(2)}`;
}
