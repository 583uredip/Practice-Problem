/* Find Number From String*/
function findNumber(str)
{
let match=str.match(/\d+/);
if(match)
{
return match[0];
}
else
{
return "No Number Found";
}
}
let input=prompt("Enter String");
let output=findNumber(input);
console.log(output);
alert(output);
