const calc = () => {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let sum = num1 + num2;
  // document.getElementById("sum").innerHTML  = `Your answer is ${sum}`;
  document.getElementById("sum").value  = `Your answer is ${sum}`;
  console.log(sum);
}
