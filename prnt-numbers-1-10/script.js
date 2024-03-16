//console log version pretty simple
// for (let i = 1; i<= 10; i++) {
//     console.log(i);
// }

//Display result in HTML file using DOM manipulation
//Declare empty string
let myString = "";
//Again use for loop 
for (let i = 1; i <= 10; i++) {
    //In this case += is not doing concatenation. Just numeric addition 
    myString += i;
    //Inserting results into <div></div> tags and display in the browser
    document.getElementById("myNumbers").innerHTML = `${myString += "<br />"}`;
}
    
        


