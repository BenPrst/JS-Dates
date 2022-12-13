function getInputValue() {
  let inputVal = document.getElementById("hours").value;
  let today = new Date();
  let timeAdded = 1000 * 60 * 60 * inputVal;
  let total = new Date(today.getTime() + timeAdded);

  document.getElementById("answer").innerHTML = total;
}
