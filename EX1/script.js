let bxTxt = document.getElementById("bruxelles");
let stPTxt = document.getElementById("saint-petersburg");
let reykjavikTxt = document.getElementById("reykjavik");
let anchorageTxt = document.getElementById("anchorage");

const d = new Date();
const localTime = d.getTime();
const localOffset = d.getTimezoneOffset() * 60000;

const utc = localTime + localOffset;

//Bruxelles

const bxTime = new Date(d).toLocaleString();

//ANCHORAGE//

const offsetAnchorage = 5;
const anchorage = utc + 3600000 * offsetAnchorage;
const anchorageTime = new Date(anchorage).toLocaleString();

//Saint-Petersbourg//

const offsetstP = +3;
const stP = utc + 3600000 * offsetstP;
const stPTime = new Date(stP).toLocaleString();

//Reykjavik//

const reykjavikTime = new Date(utc).toLocaleString();

//DISPLAY DATES

bxTxt.innerHTML = "Bruxelles : " + bxTime;
stPTxt.innerHTML = "Saint-Petersbourg : " + stPTime;
reykjavikTxt.innerHTML = "Reykjavik : " + reykjavikTime;
anchorageTxt.innerHTML = "Anchorage : " + anchorageTime;
