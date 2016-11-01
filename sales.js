var runningTotal = 0.0;

function addItem()
{
  var newItem;
  newItem = document.getElementById("price").value;
  if(isNaN(newItem))
  {
    window.alert("Enter price as a number");
  }
  else
  {
    var dollars;
    newItem = Number(newItem);
    runningTotal += newItem;
    dollars = asCurrency(runningTotal);
    document.getElementById("subtotal").innerHTML = dollars;
    document.getElementById("price").value = "";
    setCookie("preTax", runningTotal);
  }

}

//takes a number and gives a string with the number displayed as USD currency
function asCurrency(val)
{
  return "$" + val.toFixed(2);
}
function calculateReceipt()
{
  var receiptSubtotal = Number(getCookie(preTax));
  window.alert(receiptSubtotal);
  var receiptTax = receiptSubtotal * 0.075;
  document.getElementById("sub").innerHTML = "$" + receiptSubtotal;
  document.getElementById("tax").innerHTML = "$" + receiptTax;
  document.getElementById("tot").innerHTML = "$" + receiptSubtotal + receiptTax;
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
