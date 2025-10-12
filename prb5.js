/*Repdigit*/
let input=prompt("Enter Your Number");
function toNumber(num)
{
let str=num.toString();
let firstDigit=str[0];
for(let i=1;i<str.length; i++)
{
if(str[i]!==firstDigit)
{
return false;
}
}
return true;
}
let result=toNumber(input);
console.log(result);
