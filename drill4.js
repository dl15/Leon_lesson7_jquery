/*Program Name: Recipe DisplayApplication 
Author: Diego Leon
Date: 04-03-18
Filename: drill4.js */

/*global $*/



//displays the next element after the current target
function display(event) {
    
    $(event.currentTarget).next().fadeIn("slow");
    
//attach event listener to h3 elements to invoke display function when clicked
}//end of display
$("h3").click(display);



//displays and animates the next element after the current target
function display2(event) {
    $(event.currentTarget).next().animate( {height: 'toggle'}, "slow");
}//end of display2

//attach event listener to h3 elements to invoke display function when clicked
$("h3").click(display2);
