const d = new Date(); //Bruxelles
const localTime = d.getTime();
const localOffset = d.getTimezoneOffset * 60000;

const utc = localTime + localOffset;
const offset = -9;
const anchorage = utc + 3600000 * offset;

const anchorageTime = new Date(anchorage).toLocaleString;

console.log(anchorage);
