let birthDate = new Date(prompt("What's your birth date ? YYYY-MM-DD"));
let today = new Date();
let time = (today.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24);

document.body.innerHTML = time + " days have passed since your birth";
