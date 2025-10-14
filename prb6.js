/*elephant*/
let x=parseInt(prompt("Enter the coordinate of your friend's house:"));
if(isNaN(x) || x<1)
{
alert("Please enter a valid positive number!");
}
else
{
let steps = Math.ceil(x/5);
alert("Minimum number of steps:" + steps);
}
