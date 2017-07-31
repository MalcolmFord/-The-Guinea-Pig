// When any section is clicked the output target text should be "You clicked on the {text of the section} section" (DONE)
// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header". (DONE)
// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!". (DONE)
// When you type characters into the input field, the output element should mirror the text in the input field. (DONE)
// When you click the "Add color" button, the guinea-pig element's text color should change to blue.(DONE)
// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.(DONE)
// When you click the "Capture it" button, the guinea-pig element should have a border added to it.(DONE)
// When you click the "Rounded" button, the guinea-pig element's border should become rounded.(DONE)
// The first section's text should be bold. (DONE)
// The last section's text should be bold and italicized.(DONE)
// Make the buttons stop appearing next to each other as inline elements. Change them into block elements. (DONE)
var step1 = function(targetClass){
var sectionClick = document.getElementsByClassName("article-section");
console.log(sectionClick);



for (var i = 0 ; i < sectionClick.length; i++) {
   sectionClick[i].addEventListener('click' , sec_Click_Function);
 };
 function sec_Click_Function(e){
   document.getElementById("output-target").innerHTML="You clicked the section element " + e.target.innerHTML;
   console.log("You clicked the section element "+ e.target.innerHTML);
 };
 let section1 = sectionClick[0];
 section1.className += "bold";
 let section2 = sectionClick[4];
 section2.className += "italics";

 // let section2 = sectionClick[5];
 // sectionClick[5].className += "BandI";

 }(step1);
/* The block of code above creates an array of the classes "article-section". Then
itterates over the array, and depending on the one you click on, displays the sentence stated above and the text within the html elemnet.
*/
var step2 = function(hoverHeader){
  var mouseOverH2 = document.getElementById("page-title");
  mouseOverH2.addEventListener("mouseover", hover_function);
  mouseOverH2.addEventListener("mouseout", hoverOut_function)
  function hover_function(){
    document.getElementById("output-target").innerHTML="You moved your mouse over the header";
  }
  function hoverOut_function(){
    document.getElementById("output-target").innerHTML="You left me!!";
  }
}(step2);
/* The block of code above simply says "when the mouse hovers over the header id, print to the output element the specified sentence"
*/
var keyPress = document.getElementById("keypress-input");
  keyPress.onkeyup= function(){
    document.getElementById("output-target").innerHTML= keyPress.value;
  }
/* The block of code above does a live 'mirror' so when the user enters in a key stroke, a div on the page displays that same key stroke.
*/
let addFontColor = document.getElementById("add-color");
  addFontColor.addEventListener("click", fontColor);
  function fontColor(){
    let color = document.getElementById("guinea-pig")
    color.classList.toggle("font-color");
  }
/* The block of code above targets the 'add-color' button, and changes it's color when clicked*/
let GrowingFont = document.getElementById("make-large");
  GrowingFont.addEventListener("click", growFont);
  function growFont(){
    let fontToGrow = document.getElementById("guinea-pig");
    fontToGrow.classList.toggle("font-size");
  }
/* The code above take the button Hulkify, and when clicked, enlarges the text of the div "guinea-pig"*/
let AddBorder = document.getElementById("add-border");
  AddBorder.addEventListener("click", BorderAdded);
  function BorderAdded(){
    let AdBorder = document.getElementById("guinea-pig");
    AdBorder.classList.toggle("addBorder");
  }
/* The above code, when it runs, adds a border to the guinea-pig element*/
let rounded = document.getElementById("add-rounding");
  rounded.addEventListener("click", roundBorder);
  function roundBorder(){
    let borderRound = document.getElementById("guinea-pig");
    borderRound.classList.toggle("borderRound");
  }
var lastSection = document.getElementsByClassName("article-section");
for (i = 0; i = lastSection[5]; i+0){
  lastSection[5].className += " BandI";
}
