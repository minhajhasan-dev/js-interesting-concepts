function welcomeMessage(name, greetHandler) {
  greetHandler(name);
}
// const names = ["Tom Hanks", "Tom Brady", "Tom Cruise"];
// const myObj = { name: "Tom Chinku", age: 11 };
function greetMorning(name) {
  console.log("Good Morning", name);
}
welcomeMessage("Tom Hanks", greetMorning);
