function soma() {
  let numA = Number(document.getElementById("numA").value);
  let numB = Number(document.getElementById("numB").value);

  //alert(numA);
  // alert(numB);

  //Soma
  let result = numA + numB;

  document.getElementById("result").innerHTML = result;
  //document.getElementById("result").innerHTML = numA + numB;
}

function sub() {
  let numA = Number(document.getElementById("numA").value);
  let numB = Number(document.getElementById("numB").value);

  let result = numA - numB;

  document.getElementById("result").innerHTML = result;
}

function mult() {
  let numA = Number(document.getElementById("numA").value);
  let numB = Number(document.getElementById("numB").value);

  let result = numA * numB;

  document.getElementById("result").innerHTML = result;
}

function divi() {
  let numA = Number(document.getElementById("numA").value);
  let numB = Number(document.getElementById("numB").value);

  let result = numA / numB;

  document.getElementById("result").innerHTML = result;
}
