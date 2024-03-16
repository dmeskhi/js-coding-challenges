//Console version
// for (let i = 1; i <= 100; i += 2) {
//     console.log(i);
// }

//Display all even numbers in the console
// for (let i = 2; i < 100; i += 2) {
//     console.log(i);
// }

//Display results in the browser
let myString = "";

for (let i = 1; i < 100; i += 2) {
    myString += i;

    document.getElementById("myNumbers").innerHTML = `${myString += "<br />"}`
}