function currentTime() {
  const day = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let date = new Date();
  let yy = date.getFullYear();
  let mth = month[date.getMonth()];
  let dd = date.getDay();
  let dn = day[date.getDay()];
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if (hh == 0) {
    hh = 12;
  }
  if (hh > 12) {
    hh = hh - 12;
    session = "PM";
  }

  dd = dd < 10 ? "0" + dd : dd;
  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  let year = yy + "/" + mth + "/" + dd + " ";
  let time = hh + ":" + mm + ":" + ss + " " + session;

  document.getElementById("day").innerText = dn;
  document.getElementById("dayNum").innerText = dd;
  document.getElementById("month").innerText = mth;
  document.getElementById("year").innerText = yy;
  document.getElementById("clock").innerText = time;

  let t = setTimeout(function () {
    currentTime();
  }, 1000);
}
currentTime();
